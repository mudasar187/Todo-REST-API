let bodyParser = require('body-parser');
let express = require('express');

// Getting the server.js , user.js, todo.js class
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./model/todo');
let {User} = require('./model/user');

let {ObjectID} = require('mongodb');

// Creating an express app
let app = express();

/* 
Since im going to depoly to Heroku, im going to set the environment port variable that Heroku is going to set
*/
let port = process.env.PORT || 3000;

// Configure the middelware
app.use(bodyParser.json());

// POST route
app.post('/todos', (req, res) => {
    let todo = new Todo({
      text: req.body.text
    });
  
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

// GET route
app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

// GET /todos/(id here)
app.get('/todos/:id', (req,res) => {
    let id = req.params.id;
    
    // Validate the id
    if(!ObjectID.isValid(id)) {
       return res.status(404).send(); 
    }
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send(err);
    })
});

// Create the port this server is listen to
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});


// Export the app
module.exports = {
    app
};