let {ObjectID} = require('mongodb');
let {mongoose} = require('./../server/db/mongoose');
let {Todo} = require('./../server/model/todo');
let {User} = require('./../server/model/user');

/*
Todo.remove({}).then((result) => {
    console.log(result);
});
*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5aaafed3f7d93666f16bc307'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5aaafed3f7d93666f16bc307').then((todo) => {
    console.log(todo);
});