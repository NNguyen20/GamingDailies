const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/game');
});

// Login with Google
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/game',
    failureMessage: '/game'
  }
));

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/game');
});

module.exports = router;