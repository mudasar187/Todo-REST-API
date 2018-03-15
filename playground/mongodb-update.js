const {MongoClient, ObjectID} = require('mongodb');

// Connect to mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server'); // Without return the rest off code will be executed, and we wont do that
    }
    console.log('Connected to MongoDB Server');

    
    const db = client.db('TodoApp'); 

/*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aa537b28e415d26257268d0')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOrginal: false
    }).then((result) => {
        console.log(result);
    });
*/

/*
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa53cb68e415d2625726a32')
    }, {
        $inc: {
            age: -1
        }
    }, {
        returnOrginal: false
    }).then((result) => {
        console.log(result);
    });
*/

    // db.close();
});