'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        // mandatory field
        required: true
    },
    description: {
        type: String,
        // mandatory field
        required: true
    },
    createdDate: {
        type: Date,
        // to not allow users to modify the content
        unmodifiable: true
    },
    modifiedDate: {
        type: Date
    },
    dueDate: {
        type: Date,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

// sets the virtual id
todoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

todoSchema.set('toJSON', {
    virtuals: true
})

// exports the model
module.exports = mongoose.model('todoModel', todoSchema);