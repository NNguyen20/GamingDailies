const Daily = require('../models/gaily');
const Game = require('../models/game');

module.exports = {
  new: newDaily,
  create,
  addToCast
};

function addToCast(req, res) {
  // Obtain the Game
  Game.findById(req.params.GameId, function(err, Game) {
    // Push the _id of the Daily into the Game's cast array
    Game.cast.push(req.body.DailyId);
    // Save the Game
    Game.save(function(err) {
      // Redirect back to the Game show route
      res.redirect(`/games/${Game._id}`);
    });
  });
}

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Daily.create(req.body, function (err, Daily) {
    res.redirect('/Dailys/new');
  });
}

function newDaily(req, res) {
  Daily
    .find({})
    .sort('name')
    .exec(function (err, Dailys) {
      res.render('daily/new', {
        title: 'Add daily',
        Dailys
      });
  });
}