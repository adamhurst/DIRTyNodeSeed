'use strict';

var mongoose = require('mongoose');

var _model = {};

_model.schema = new mongoose.Schema(
    {
        post: { type: String, required: false, default: 'no name' },
        date: { type: String, required: false, default: new Date() }
    },
    {
        collection : 'posts' // Link to existing DB collection
    });

_model.collection = mongoose.model('Test', _model.schema);

module.exports = _model;