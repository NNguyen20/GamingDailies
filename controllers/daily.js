const game = require('../models/game');
const daily = require('../models/performer');

module.exports = {
  index,
  show,
  new: newgame,
  create
};

function index(req, res) {
  game.find({}, function(err, games) {
    res.render('games/index', { title: 'All games', games });
  });
}

function show(req, res) {
  game.findById(req.params.id)
    .populate('cast')
    .exec(function(err, game) {
      // Native MongoDB syntax
      daily
        .find({_id: {$nin: game.cast}})
        .sort('name').exec(function(err, dailys) {
          res.render('games/show', { title: 'game Detail', game, dailys });
        });
    });
}

function newgame(req, res) {
  res.render('games/new', { title: 'Add game' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // ensure empty inputs are removed so that model's default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const game = new game(req.body);
  game.save(function(err) {
    if (err) return res.redirect('/games/new');
    res.redirect(`/games/${game._id}`);
  });
}
