'use strict';

var express = require('express');

module.exports = function(app) {

    app.use("/", express.static(__dirname+'/../frontend-src/app/'));

    // Set up the REST API
    require('./template_api')(app);
};