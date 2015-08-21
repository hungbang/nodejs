var server = require('http').createServer();
var io = require('socket.io')(server);
var content = null;
io.sockets.on('connection', function(socket){
	console.log('socket is connected');
	socket.on('disconnect', function(){
		console.log('socket is disconnected');
	});
	socket.emit('text', 'Hello world');
	socket.on('chat', function(newChat){
		console.log(newChat);
		socket.emit('chatTo', newChat);
		socket.broadcast.emit('chatTo', newChat);
	});
});
io.set('origins', "*:*");
server.listen(8088);
