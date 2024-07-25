// routes/coverLetter.js
const express = require('express');
const CoverLetter = require('../models/CoverLetter');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create Cover Letter
router.post('/', authMiddleware, async (req, res) => {
    try {
        const coverLetter = new CoverLetter({ user: req.user._id, content: req.body.content });
        await coverLetter.save();
        res.status(201).json(coverLetter);
    } catch (err) {
        res.status(400).send('Error creating cover letter');
    }
});

// Get All Cover Letters for a User
router.get('/', authMiddleware, async (req, res) => {
    try {
        const coverLetters = await CoverLetter.find({ user: req.user._id });
        res.json(coverLetters);
    } catch (err) {
        res.status(400).send('Error fetching cover letters');
    }
});

module.exports = router;
