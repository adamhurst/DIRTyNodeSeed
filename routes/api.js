module.exports = function(app) {
    'use strict';

    var data = [];
    for(var i=0;i<10;i++){
        data.push( {"x":i, "y":Math.cos(i/10)} )
    }

    /* GET users listing. */
    app.get('/api/test', function(req, res) {
        res.json(
            {
                desc: 'Data Object',
                data: data
            }
        );
    });

    app.post('/api/test', function(req, res) {

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

    });

    // delete a todo
    app.delete('/api/test/:test_id', function(req, res) {
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
    });

};