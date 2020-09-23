const express = require('express');
const router = express.Router();
const entry = require('../controllers/entryController');

router.post('/generate-code', entry.createEntry)

router.get('/get-entries', entry.getEntries)

module.exports = router;