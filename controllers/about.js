module.exports = {
    index,
  }
  
  function index(req, res) {
    res.render('about/index', { title: 'About' })
  };