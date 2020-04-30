'use strict';

// import for the service
const todoService = require('./../service/todo-service');

/**
 * @param req
 * @param res
 */

exports.list = (req, res) => {
    const promise = todoService.search({});
    const result = (x) => {
        res.status(200);
        res.json(x);
    };
    promise.then(result).catch(errorRes(res));
};

/**
 * @param req
 * @param res
 * Method to handle post req
 */

exports.save = (req, res) => {
    const todo = Object.assign({}, req.body);
    const result = (todo) => {
        res.status(201);
        res.json(todo);
    };
    const promise = todoService.save(todo);
    promise.then(result).catch(errorRes(res));
};

/**
 * @param req
 * @param res
 * Method to handle put request
 */

exports.update = (req, res) => {
    const todoID = req.params.id;
    const todobody = Object.assign({}, req.body);
    // get the body fRom the req
    todobody.id = todoID;
    const result = (todo) => {
        res.status(200);
        res.json(todo);
    };
    const promise = todoService.update(todobody);
    promise.then(result).catch(errorRes(res));
}

/**
 * @param req
 * @param res
 * Method to handle the delete req
 */

exports.delete = (req, res) => {
    const todoID = req.params.id;
    const result = (todo) => {
        res.status(200);
        res.json({
            message: "Successfully Deleted"
        });
    };
    const promise = todoService.delete(todoID);
    promise.then(result).catch(errorRes(res));
}

/**
 * @param response
 * Method to handle error
 */

let errorRes = (response) => {
    const error = (res) => {
        response.status(500);
        response.json({
            // sets the error message
            message: res.message
        });
    }
    return error;
}