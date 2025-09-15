const express = require('express');
const Project = require('../models/Project');
const Team = require('../models/Team');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    let query = {};
    
    // If not admin or teacher, only show user's team projects
    if (req.user.role === 'student') {
      const userTeam = await Team.findOne({ 'members.user': req.user.id });
      if (userTeam) {
        query.team = userTeam._id;
      }
    }

    const projects = await Project.find(query)
      .populate('team')
      .populate('tasks.assignedTo', 'name email');

    res.status(200).json({
      success: true,
      count: projects.length,
      projects
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Create new project
// @route   POST /api/projects
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    // Add user's team to req.body
    if (req.user.role === 'student') {
      const userTeam = await Team.findOne({ 'members.user': req.user.id });
      if (!userTeam) {
        return res.status(400).json({
          success: false,
          message: 'You must be part of a team to create a project'
        });
      }
      req.body.team = userTeam._id;
    }

    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('team')
      .populate('tasks.assignedTo', 'name email');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('team').populate('tasks.assignedTo', 'name email');

    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
router.delete('/:id', protect, authorize('admin', 'teacher'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;