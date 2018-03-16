require('./config/config'); // Get the config file

let bodyParser = require('body-parser');
let express = require('express');
let _ = require('lodash');

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
let port = process.env.PORT;

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

// DELETE /todos/:id
app.delete('/todos/:id', (req,res) => {
    let id = req.params.id;

    // Validate the id
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    });
});


// UPDATE /todos/:id
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;

    let body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((err) => {
        res.send.status(400).send();
    });
});


// Create the port this server is listen to
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});


// Export the app
module.exports = {
    app
};