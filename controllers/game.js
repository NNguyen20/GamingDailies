const Game = require('../models/Game');
const Daily = require('../models/Daily');

module.exports = {
  index,
  show,
  new: newGame,
  create
};

function index(req, res) {
  Game.find({}, function(err, Games) {
    res.render('Games/index', { title: 'All Games', Games });
  });
}

function show(req, res) {
  Game.findById(req.params.id)
    .populate('cast')
    .exec(function(err, Game) {
      // Native MongoDB syntax
      Daily
        .find({_id: {$nin: Game.cast}})
        .sort('name').exec(function(err, Dailys) {
          res.render('Games/show', { title: 'Game Detail', Game, Dailys });
        });
    });
}

function newGame(req, res) {
  res.render('Games/new', { title: 'Add Game' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // ensure empty inputs are removed so that model's default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const Game = new Game(req.body);
  Game.save(function(err) {
    if (err) return res.redirect('/Games/new');
    res.redirect(`/Games/${Game._id}`);
  });
}
