'use strict';
const todoController = require('./../controller/todo-controller');

module.exports = (app) => {
    // routing for the simple get and post
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.save);

    // routing for put and delete
    app.route('/todo/:id')
        .put(todoController.update)
        .delete(todoController.delete);
}