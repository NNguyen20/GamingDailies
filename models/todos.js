const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String

})




module.exports = mongoose.model('todos', todoSchema);

// // The ids can be generated using:
// // Date.now() % 1000000

  
//   module.exports = {
//     getAll,
//     getOne,
//     create,
//     deleteOne,
//     update
//   };
  
//   function update(id, todo) {
//     // Find the index based on the id of the todo object
//     const idx = todos.findIndex(todo => todo.id === parseInt(id));
//     // Ensure the id is copied over
//     todo.id = parseInt(id);
//     todos.splice(idx, 1, todo);
//   }
  
//   function deleteOne(id) {
//     // Find the index based on the id of the todo object
//     const idx = todos.findIndex(todo => todo.id === parseInt(id));
//     todos.splice(idx, 1);
//   }
  
//   function create(todo) {
//     // Add the id
//     todo.id = Date.now() % 1000000;
//     // New todos wouldn't be done :)
//     todo.done = false;
//     todos.push(todo);
//   }
  
//   function getOne(id) {
//     // Use the Array.prototype.find iterator method
//     return todos.find(todo => todo.id === parseInt(id));
//   }
  
//   function getAll() {
//     return todos;
//   }