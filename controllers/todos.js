var Todo = require('../models/games');

module.exports = {
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update
};

function show(req, res) {
  Todo.find({}, function(err, todos){
    res.render('todos/show', {title: 'dailies', todo})
  })
}

function newTodo(req, res) {
  res.render('todo/new', { title: 'New daily' });
}

function create(req, res) {
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  
  const todo = new Todo(req.body);
  todo.save(function(err) {
      if (err) return res.redirect('/todos/new');
      res.redirect(`/todos/${todo._id}`);
  });
}

function deleteTodo(req, res) {
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  const todo = new Todo(req.body);
  todo.save(function(err) {
      if (err) return res.redirect('/todos/deleteTodo');
      res.redirect(`/todos/${todo._id}`);
  });
}

function edit(req, res) {
  res.render('todo/edit', { title: 'Edit' });
}

function update(req, res) {
  res.render('todo/update', { title: 'Update' });
}

// function update(req, res) {

//   req.body.done = req.body.done === 'on';

//   Todo.update(req.params.id, req.body);
//   res.redirect('/todos');
// }

// function edit(req, res) {
//   res.render('todos/edit', {
//     todo: Todo.getOne(req.params.id)
//   });
// }

// function deleteTodo(req, res) {
//   Todo.deleteOne(req.params.id);
//   res.redirect('/todos');
// }

// function create(req, res) {
//   console.log(req.body);
//   req.body.done = false;
//   Todo.create(req.body);
//   res.redirect('/todos');
// }

// function newTodo(req, res) {
//   res.render('todos/new');
// }

// function index(req, res) {
//   Todo.find({}, function(err, todo) {
//     res.render('todos/index', {todo, title: 'todos'})
// });
// }

// function show(req, res) {
//   res.render('todos/show', {
//     todo: Todo.getOne(req.params.id),
//     // Would like to display the number of the todo within the list
//     todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
//   });
// }