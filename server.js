(function(){
    'use strict';

    // define globals
    var express = require('express'),
        http = require('http'),
        path = require('path'),
        logger = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        methodOverride = require('method-override'),
        sys = require('sys'),
        app = express(),
        port = 8000;

    // Initialise the MongoDB
    var db = require('./db/mongo_init')(app);

    // middleware settings
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(methodOverride());
    app.use(require('stylus').middleware(path.join(__dirname, 'public')));

    var server = http.createServer(app);

    // Set up our routes, REST API & socket server
    require('./routes/index')(app);
    require('./sockets/base')(server);

    // start the server
    server.listen(port, function(){
        console.log("Server started and listening on port "+port);
    });


    //app.use("/", express.static(__dirname+'/public/'));

    /*
     // for production
     app.use(express.static(__dirname +  '/public'));

     // for development purposes, access during iterative development
     // see below if you want to add back the development env
     app.use('/angular-dev', express.static(__dirname  + '/frontend-src/app/index.html'));
     */

    /*
    app.get('/', function(req, res) {
        res.sendfile('./frontend-src/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    /// catch 404 and forwarding to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        res.sendfile('./views/404.html');
        //next(err);
    });

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.sendfile('./views/500.html');
        // next(err);
    });*/

    /// error handlers
/*
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
 */
    // production error handler
    // no stacktraces leaked to user


    module.exports = app;

}());