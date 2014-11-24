'use strict';

process.env.NODE_ENV = 'development';

(function(){

    /**
     * Module dependencies.
     */

    var init = require('./config/init')(),
        config = require('./config/config'),
        chalk = require('chalk'),
        http = require('http');

    /**
     * Main application entry file.
     * Please note that the order of loading is important.
     */

    // Initialise the MongoDB connection
    var db = require('./config/mongo_init')();

    // Init the express application
    var app = require('./config/express')(db);

    var server = http.createServer(app);
    require('./sockets/base')(server);
    // Set up our routes, REST API & socket server
    require('./routes/index')(app);


    // start the server
    server.listen(config.port, function(){
        console.log(chalk.green("Server started and listening on port "+config.port));
    });

    module.exports = app;
}());











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
