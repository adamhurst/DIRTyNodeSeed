'use strict';

var mongoose = require('mongoose'),
    _posts = mongoose.model('Test'),
    baseURI = '/api/template';


module.exports = function(app) {
    /* CRUD RESTful API to the MongoDB */

    // Get a document by id
    app.get( baseURI+'/:id', function(req, res) {
        _posts
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
        _posts.find(function (err, documents) {
            if (err){
                return console.error(err);
            } else {
                res.json({"data":documents});
            }
        });
    });

    // Create a document
    app.post( baseURI, function(req, res) {
        var newDoc = new _posts({
            post: req.body.post,
            date:  new Date()
        });

        newDoc.save(function(err, _newDoc){
            if (err){
                return console.error(err);
            } else {
                _posts.find(function (_err, documents) {
                    if(!_err) res.json({"data":documents});
                });
            }
        });
    });

    // delete a document
    app.delete( baseURI, function(req, res) {

        _posts.remove({'_id': req.query.id}, function(err) {
            if(!err) {
                _posts.find(function (_err, documents) {
                    if (!_err) res.json({"data": documents});
                });
            }
        });
    });
        /*
        _posts.collection.remove({_id: req.body.id}, function(){
            _posts.collection.find(function (_err, documents) {
                if(!_err) res.json({"data":documents});
            });
        })
        */


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