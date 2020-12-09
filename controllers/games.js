var Game = require('../models/games')


module.exports = {
    index,
    new: newGame,
    create
}


function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('todos/index', {title: 'game', games})
    })
}

function newGame(req, res) {
    res.render('games/new', {title: "Add Game"});
}
function create(req, res) {
    req.body.user = req.user._id;
    let game = new Game(req.body);
    game.save(function(err) {
        if (err) res.redirect('/games/new');
        res.redirect('/games')
    })
}