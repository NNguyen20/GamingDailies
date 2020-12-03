const express = require('express');
const router = express.Router();
const dailyCtrl = require('../controllers/daily');
const isLoggedIn = require('../config/auth');

router.get('/daily/new', isLoggedIn, dailyCtrl.new);
router.post('/daily', isLoggedIn, dailyCtrl.create);
router.post('/game/:gameId/daily', isLoggedIn, dailyCtrl.addToCast)

module.exports = router;