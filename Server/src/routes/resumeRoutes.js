const express = require('express');
const { uploadResume, compareResumes, submitComparison, getRankings } = require('../controllers/resumeController');
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/upload', auth, upload.single('resume'), uploadResume);
router.get('/compare', auth, compareResumes);
router.post('/submit-comparison', auth, submitComparison);
router.get('/rankings', auth, getRankings);

module.exports = router;