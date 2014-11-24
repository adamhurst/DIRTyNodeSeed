'use strict';

/**
 * Module dependencies.
 */
var config = require('./config'),
    fs = require('fs'),
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sys = require('sys'),
    helmet = require('helmet');



module.exports = function(db) {
    // Initialize express app
    var app = express();

    // Globbing model files
    config.getGlobbedFiles('./models/**/*.js').forEach(function(modelPath) {
        console.log('MODEL PATH: '+modelPath);
        require(path.resolve(modelPath));
    });

    app.set('port', config.port);

    // middleware settings
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(methodOverride());
    app.use(require('stylus').middleware(path.join(__dirname, '/../public')));
    app.use(helmet());

    // Return Express server instance
    return app;
};