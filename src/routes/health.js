const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', time: '2026-04-15 19:18:45' });
});

module.exports = router;