const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  version: String,
  size: String,
  icon: String,
  screenshots: [String],
  apkUrl: String,
  downloadCount: {
    type: Number,
    default: 0
  },
  ratings: {
    type: [Number],
    default: []
  },
  comments: {
    type: [String],
    default: []
  },
  isApproved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('App', appSchema);
