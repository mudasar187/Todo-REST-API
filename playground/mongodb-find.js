const {MongoClient, ObjectID} = require('mongodb');

// Connect to mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server'); // Without return the rest off code will be executed, and we wont do that
    }
    console.log('Connected to MongoDB Server');

    
    const db = client.db('TodoApp'); 
/*
    db.collection('Todos').find({
        _id: new ObjectID('5aa5347d934bb53642c89b7a')     
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
*/

/*
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
*/

/*
    db.collection('Users').find({name: "Mudasar"}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });
*/

    // db.close();
});