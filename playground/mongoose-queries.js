let {ObjectID} = require('mongodb');
let {mongoose} = require('./../server/db/mongoose');
let {Todo} = require('./../server/model/todo');
let {User} = require('./../server/model/user');

/*
let id = '5aaabd6c790b5b3a4d2a46188';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}
*/

/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});
*/

/*
Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));
*/

/*
User.findById('5aaaa6d902a0bb713619aee21').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
*/