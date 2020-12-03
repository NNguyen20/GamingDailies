const express = require('express');
const router = express.Router();
const gameCtrl = require('../controllers/game');
const isLoggedIn = require('../config/auth');

router.get('/', gameCtrl.index);
router.get('/new', isLoggedIn, gameCtrl.new);
router.get('/:id', gameCtrl.show);
router.post('/', isLoggedIn, gameCtrl.create);

module.exports = router;
