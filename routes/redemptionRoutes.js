const express = require('express');
const router = express.Router();
const redemption = require('../controllers/redemptionController');

router.post('/redeem-code', redemption.redeemCode)

module.exports = router;