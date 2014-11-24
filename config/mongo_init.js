'use strict';

module.exports = function(){

    var exec = require('child_process').exec,
        mongoose = require('mongoose');

    console.log('Starting up the MongoDB server...');

    exec('start C:/mongodb/bin/mongod.exe --dbpath ./db', function(){
        console.log('MongoDB server has been shut down');
    });

    // TODO: Validate that the MongoDB server has started
    console.log('MongoDB server now listening on http://localhost:27017');

    mongoose.connect('mongodb://localhost:27017/testdb');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log('Connection established between NodeJS and MongoDB servers');
    });

    // Start up the mongoDB server in a new command prompt window
    //exec('start C:/mongodb/bin/mongod.exe --logpath ./db/logs/mongodb.log --dbpath ./db');

    //mongoose.connect('mongodb://localhost/')

    // Make our db accessible to our router
    /*
    app.use(function(req,res,next){
        req.db = db;
        next();
    });
    */
    return db;
};