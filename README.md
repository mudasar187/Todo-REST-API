# Todo-REST-API

A Todo-REST-API using MongoDB locally and Heroku deployment

## Run

You'll need:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Robo3T](https://robomongo.org/)
- [Postman](https://www.getpostman.com/) or something similar

Do:

- npm install (Install all dependencies you need)
- node server.js (To run the server before enter the url or use Postman)
- npm run test-watch (Too see the tests for the requests if you want)

## Endpoints

### See all Todos

GET /todos

Enter this url -> [http://localhost:3000/todos](http://localhost:3000/todos) in Chrome or enter it in Postman or something similar

### Add a Todo

POST /todos

To add a todo enter this url -> [http://localhost:3000/todos](http://localhost:3000/todos) in [Postman](https://www.getpostman.com/) or something similar

Set the header 'Content-Type: application/json'

The body MUST contain:
- text (String)

Example:

{
	"text": "Something to do from Postman"
}

When you're done go to  [http://localhost:3000/todos](http://localhost:3000/todos) and see the todo you just added


### Find Todo by ID

GET /todos/:id

To get a todo by ID, enter this url -> [localhost:3000/todos/yourTodoId](localhost:3000/todos/yourTodoId)

Make a GET request for all todos, grab one of the todo's ID and insert it in the end of the url and see the output

### Update a Todo by ID

PATCH /todos/:id

To update a todo by ID, enter this url -> [localhost:3000/todos/yourTodoId](localhost:3000/todos/yourTodoId)
Make a GET request for all todos, grab one of the todo's ID and insert it in the end of the url and then make a PATCH request by enter an id and set example this -> 

{
    "text": "This is an updated text"
}

Now get ALL todos by making /GET request and see if there is an updated text

## Deloy to Heroku

You'll need:

- [Heroku](https://www.heroku.com/) (Create a account, its free)

When you want to deploy your production app to Heroku you need to to some following things:

- Go to the main *.js file, where the server runs. In this app i have my main *.js file named 'server.js'

- Add a new line with this -> let port = process.env.PORT;
- Add these lines in bottom of the file ->  app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
- Add this lines to 'package.json' file, REMEMBER TO INCLUDE ALL THE TEXT ->

  "scripts": {
    "start": "node server/server.js",
    "test": "export NODE_ENV=test || SET \"NODE_ENV=test\" && mocha server/**/*.test.js",
    "test-watch": "nodemon --exec 'npm test'"
  },
  "engines": {
    "node": "8.10.0"
  },

- Go to the file where the connection for mongodb is, in my project i have it in 'mongoose.js' file, add this line -> mongoose.connect(process.env.MONGODB_URI);

- When done, go to your terminal where project is located and type followings

- heroku create
- heroku addons:create mongolab:sandbox
- heroku config (If you see the text 'Started up on port (some number)' then you are good to go)
- git push heroku master
- heroku logs (To check the logs on your server, if any error, you will se it there)
- heroku open (open the url where the production app lives, remember to run this command inside the project folder)

