const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/about');

router.get('/', aboutCtrl.index);

module.exports = router;