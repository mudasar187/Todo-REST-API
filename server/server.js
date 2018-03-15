let bodyParser = require('body-parser');
let express = require('express');

// Getting the server.js , user.js, todo.js class
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./model/todo');
let {User} = require('./model/user');

// Creating an express app
let app = express();

// Configure the middelware
app.use(bodyParser.json());

// Post route
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(() => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



// Create the port this server is listen to
app.listen(3000, () => {
    console.log('Started on port 3000');
});