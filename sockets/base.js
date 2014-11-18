module.exports = function (server) {
    'use strict';

    var io = require('socket.io');

    io = io.listen(server);
    io.set('log level', 1000);

    io.on('connection', function (socket) {
        socket.broadcast.emit('user connected');

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
    });
};