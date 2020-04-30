'use strict';
const mongoose = require('mongoose');

const todoModel = mongoose.model('todoModel');

/**
 * Method to handle search
 */
exports.search = (params) => {
    const promise = todoModel.find(params).exec();
    return promise;
};

/**
 * Method to handle save a resource
 */
exports.save = (todo) => {
    const newtodo = new todoModel(todo);
    // get the current utc datetime
    let currentdate = new Date();
    // sets the createdDate and modifiedDate
    newtodo.set("createdDate", currentdate.toLocaleString());
    newtodo.set("modifiedDate", currentdate.toLocaleString());
    return newtodo.save();
}

/**
 * Method to handle update resource
 */
exports.update = (updatedtoDo) => {
    // get the current utc datetime
    let currentdate = new Date();
    // sets the modified date
    updatedtoDo.modifiedDate = currentdate.toLocaleString();
    const promise = todoModel.findByIdAndUpdate({
        _id: updatedtoDo.id
    }, updatedtoDo, { new: true }).exec();
    return promise;
}

/**
 * method to delete a resource
 */
exports.delete = (todoId) => {
    const promise = todoModel.findByIdAndDelete({
        _id: todoId
    }).exec();
    return promise;
}