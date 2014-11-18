module.exports = function(app) {
    'use strict';
    /* CRUD RESTful API to the MongoDB */

    var _posts = require('../models/testModel');
    var baseURI = '/api/template';

    // Get a document by id
    app.get( baseURI+'/:id', function(req, res) {
        _posts.collection
            .findOne({'date': req.query.id})
            .exec(function (err, document) {
                if (err){
                    return console.error(err);
                } else {
                    res.json({"data": document});
                }
            });
    });

    // Get all documents
    app.get(baseURI, function(req, res) {
        _posts.collection.find(function (err, documents) {
            if (err){
                return console.error(err);
            } else {
                res.json({"data":documents});
            }
        });
    });

    // Create a document
    app.post( baseURI, function(req, res) {

        console.log('################')
        console.log(req.params)
        console.log('################')
        var newDoc = new _posts.collection({post: req.params.post});

        newDoc.save(function(err, _newDoc){
            if (err){
                return console.error(err);
            } else {
                console.log("MongoDB write successful "+_newDoc);
            }
        });
    });

    // delete a document
    app.delete( baseURI+'/:template_id', function(req, res) {

    });

    // Update a document
    app.put( baseURI+'/:template_id', function(req, res) {
        //testCollection.update({},{$set: {}})
    });
};
















/*
// create a todo, information comes from AJAX request from Angular
dbCollection.create({
    text : req.body.text,
    done : false
}, function(err, todo) {
    if (err){
        res.send(err);
    }

    // get and return all the todos after you create another
    dbCollection.find(function(err, todos) {
        if (err){
            res.send(err);
        }
        res.json(todos);
    });
});


dbCollection.remove({
    _id : req.params.todo_id
}, function(err, todo) {
    if (err){
        res.send(err);
    }

    // get and return all the todos after you create another
    dbCollection.find(function(err, todos) {
        if (err){
            res.send(err)
        }
        res.json(todos);
    });
});
    */