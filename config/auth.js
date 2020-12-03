// Middleware for routes that require a logged in user
module.exports = function isLoggedIn(req, res, next) {
    // Pass the req/res to the next middleware/route handler
    // If logged in, call next()
    if ( req.isAuthenticated() ) return next();
    // Redirect to login if the user is not already logged in
    //bad user - tried to access a protected route
    res.redirect('/auth/google');
  }
  