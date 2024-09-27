const Resume = require('../models/Resume');
const { calculateElo } = require('../utils/eloCalculator');

exports.uploadResume = async (userId, filename) => {
  const resume = new Resume({ userId, filename });
  await resume.save();
};

exports.getResumesForComparison = async () => {
  return Resume.aggregate([{ $sample: { size: 2 } }]);
};

exports.updateResumeRankings = async (winnerId, loserId) => {
  const winner = await Resume.findById(winnerId);
  const loser = await Resume.findById(loserId);
  
  const [newWinnerRating, newLoserRating] = calculateElo(winner.eloRating, loser.eloRating);
  
  await Resume.findByIdAndUpdate(winnerId, { eloRating: newWinnerRating });
  await Resume.findByIdAndUpdate(loserId, { eloRating: newLoserRating });
};

exports.getTopRankings = async () => {
  return Resume.find().sort({ eloRating: -1 }).limit(10);
};