const express = require('express');
const router = express.Router();

// GET grading list
router.get('/grading', (req, res) => {
    res.send('List of grading items.');
});

// POST create a new grading item
router.post('/grading', (req, res) => {
    const newItem = req.body;
    res.status(201).send(`Grading item created: ${JSON.stringify(newItem)}`);
});

// PUT update a grading item
router.put('/grading/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    res.send(`Grading item with id ${id} updated: ${JSON.stringify(updatedItem)}`);
});

// DELETE a grading item
router.delete('/grading/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Grading item with id ${id} deleted.`);
});

module.exports = router;