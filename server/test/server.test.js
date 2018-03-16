let expect = require('expect');
let request = require('supertest');
let {ObjectID} = require('mongodb');

let {app} = require('./../server');
let {Todo} = require('./../model/todo');

// Creating an array with dummy todos
let todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];


// Empty the database and add dummy todos, then run the tests
beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});


// Test POST
describe('POST /todos', () => {

    // Test case 1
    it('should create a new todo', (done) => {
        let text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => done(err));
            });
        });

    // Test case 2
    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err));
            });
    });
});


// Test GET
describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});


// Test GET by ID
describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        var hexID = new ObjectID().toHexString();

        request(app)
            .get(`/todos/${hexID}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-objects id', (done) => {

        request(app)
            .get('/todos/123abc')
            .expect(404)
            .end(done);
    });
});


// Test DELETE by ID
describe('DELETE /todos/:id', () => {
    it('should remove a todo', (done) => {
      var hexId = todos[1]._id.toHexString();
  
      request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo._id).toBe(hexId);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          Todo.findById(hexId).then((todo) => {
            expect(todo).toBe(null);
            done();
          }).catch((e) => done(e));
        });
    });
  
    it('should return 404 if todo not found', (done) => {
      var hexId = new ObjectID().toHexString();
  
      request(app)
        .delete(`/todos/${hexId}`)
        .expect(404)
        .end(done);
    });
  
    it('should return 404 if object id is invalid', (done) => {
      request(app)
        .delete('/todos/123abc')
        .expect(404)
        .end(done);
    });
  });


  // Test UPDATE /todos/:id
  describe('PATCH /todos/:id', () => {
    it('should update the todo', (done) => {
      let hexId = todos[1]._id.toHexString();
      let text = 'This should be the new text';
  
      request(app)
        .patch(`/todos/${hexId}`)
        .send({
          completed: true,
          text
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(text);
          expect(res.body.todo.completed).toBe(true);
          expect(res.body.todo.completedAt).toBeLessThan(new Date().getTime());
        })
        .end(done);
    });
  
    it('should clear completedAt when todo is not completed', (done) => {
      let hexId = todos[1]._id.toHexString();
      let text = 'This should be the new text!!';
  
      request(app)
        .patch(`/todos/${hexId}`)
        .send({
          completed: false,
          text
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(text);
          expect(res.body.todo.completed).toBe(false);
          expect(res.body.todo.completedAt).toBe(null);
        })
        .end(done);
    });
  });