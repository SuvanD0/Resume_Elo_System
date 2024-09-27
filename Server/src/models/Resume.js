const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  eloRating: { type: Number, default: 1500 },
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);