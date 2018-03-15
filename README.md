# Todo-REST-API

A Todo-REST-API using MongoDB locally
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
