const resumeService = require('../services/resumeService');

exports.uploadResume = async (req, res, next) => {
  try {
    await resumeService.uploadResume(req.user.id, req.file.filename);
    res.status(201).json({ message: 'Resume uploaded successfully' });
  } catch (error) {
    next(error);
  }
};

exports.compareResumes = async (req, res, next) => {
  try {
    const resumes = await resumeService.getResumesForComparison();
    res.json(resumes);
  } catch (error) {
    next(error);
  }
};

exports.submitComparison = async (req, res, next) => {
  try {
    const { winnerId, loserId } = req.body;
    await resumeService.updateResumeRankings(winnerId, loserId);
    res.json({ message: 'Comparison submitted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getRankings = async (req, res, next) => {
  try {
    const rankings = await resumeService.getTopRankings();
    res.json(rankings);
  } catch (error) {
    next(error);
  }
};