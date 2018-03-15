const {MongoClient, ObjectID} = require('mongodb');

// Connect to mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server'); // Without return the rest off code will be executed, and we wont do that
    }
    console.log('Connected to MongoDB Server');

    
    const db = client.db('TodoApp'); 

    // deleteMany
    /*
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */

    // deleteOne
    /*
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */

    // findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => { // this will find the first object with false since we using findOneAndDelete
        console.log(result);
    });
    */

    // db.close();
});