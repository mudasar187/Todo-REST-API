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

### See all todos
 Go to [http://localhost:3000/todos](http://localhost:3000/todos) in Chrome or enter the url in Postman or something similar

### Add a todo

[Postman](https://www.getpostman.com/) or something similar to send a POST request to  [http://localhost:3000/todos](http://localhost:3000/todos)

You need the header 'Content-Type: application/json'

The body MUST contain:
- text (String)

Example:

{
	"text": "Something to do from Postman"
}

When you're done go to  [http://localhost:3000/todos](http://localhost:3000/todos) and see the todo you just added

 