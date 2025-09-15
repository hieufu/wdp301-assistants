const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a project description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  technology: {
    frontend: [String],
    backend: [String],
    database: [String],
    mobile: [String]
  },
  team: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
    required: true
  },
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'testing', 'completed', 'on-hold'],
    default: 'planning'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: [true, 'Please provide a due date']
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  tasks: [{
    title: {
      type: String,
      required: true
    },
    description: String,
    assignedTo: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['todo', 'in-progress', 'review', 'done'],
      default: 'todo'
    },
    dueDate: Date,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  repository: {
    url: String,
    branch: {
      type: String,
      default: 'main'
    }
  },
  deployment: {
    frontend: String,
    backend: String,
    mobile: String
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ team: 1, status: 1 });
projectSchema.index({ dueDate: 1 });

module.exports = mongoose.model('Project', projectSchema);