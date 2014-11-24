'use strict';

var mongoose = require('mongoose');


var _schema = new mongoose.Schema(
    {
        post: { type: String, required: false, default: 'no name' },
        date: { type: String, required: false, default: new Date() }
    },
    {
        collection : 'posts' // Link to existing DB collection
    });

mongoose.model('Test', _schema);