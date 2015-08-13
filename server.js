// var server = require('http').createServer();
// var io = require('socket.io')(server);

// io.sockets.on('connection', function (socket) {
//     console.log('socket connected');

//     socket.on('disconnect', function () {
//         console.log('socket disconnected');
//     });
//     socket.emit('text', 'wow. such event. very real time.');
// });

// server.listen(8088);

var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function(socket){
	console.log('socket is connected');
	socket.on('disconnect', function(){
		console.log('socket is disconnected');
	});

	socket.emit('text', 'hello the world');

	socket.on('new-user', function(data){
		console.log('User %s have joined', data);
	});
});
io.set('origins', '*:*');
server.listen(8088);