const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a team name'],
    trim: true,
    maxlength: [50, 'Team name cannot be more than 50 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  members: [{
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    role: {
      type: String,
      enum: ['leader', 'frontend-dev', 'backend-dev', 'mobile-dev', 'fullstack-dev', 'designer', 'tester'],
      default: 'fullstack-dev'
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  maxMembers: {
    type: Number,
    min: 3,
    max: 5,
    default: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  technologies: {
    frontend: [String],
    backend: [String],
    database: [String],
    mobile: [String],
    tools: [String]
  },
  projects: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true
});

// Virtual for current member count
teamSchema.virtual('memberCount').get(function() {
  return this.members.length;
});

// Virtual for available spots
teamSchema.virtual('availableSpots').get(function() {
  return this.maxMembers - this.members.length;
});

// Index for better query performance
teamSchema.index({ teacher: 1 });
teamSchema.index({ isActive: 1 });

module.exports = mongoose.model('Team', teamSchema);