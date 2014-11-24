module.exports = function (server) {
    'use strict';
    console.log('setting up web-socket');
    var io = require('socket.io');

    io = io.listen(server);
    io.set('log level', 0);

    io.on('connection', function (socket) {
        socket.broadcast.emit('user connected');
        console.log('a user connected');

        socket.on('message', function (from, msg) {

            console.log('recieved message from', from, 'msg', JSON.stringify(msg));

            console.log('broadcasting message');
            console.log('payload is', msg);
            io.sockets.emit('broadcast', {
                payload: msg,
                source: from
            });
            console.log('broadcast complete');
        });

        io.emit('newdata', {d: 'testing'});

        socket.on('message', function(){
            console.log('Message recieved')
        });

        var i = 0;
        setTimeout(function temp(){
            socket.emit('newdata', {'x': Math.sin(i/10), 'y': Math.cos(i/10), 'z': i });
            socket.emit('newdata', {'x': Math.sin(i/10), 'y': Math.cos(i/9.5), 'z': i });
            socket.emit('newdata', {'x': Math.sin(i/10), 'y': Math.cos(i/9), 'z': i });
            socket.emit('newdata', {'x': Math.sin(i/10), 'y': Math.cos(i/8.5), 'z': i });
            if(i<1000){i++; setTimeout(temp, 5)}
            //console.log('newdata')

        }, 2000)
    });


    return io
};