var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', function(req, res) {
       res.render('index');
    });
    
    app.get('/todos/:username', function(req, res) {
         Todos.find({ username: req.params.username }, function(err, todos) {
            if (err) throw err;
            
            console.log(todos)
            res.render('todos', { ID: req.params.id, TODOS: todos });    
        });
        
    });
}