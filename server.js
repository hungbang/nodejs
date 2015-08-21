// var server = require('http').createServer();
// var io = require('socket.io')(server);
// var content = null;
// io.sockets.on('connection', function(socket){
// 	console.log('socket is connected');
// 	socket.on('disconnect', function(){
// 		console.log('socket is disconnected');
// 	});
// 	socket.emit('text', 'Hello world');
// 	socket.on('chat', function(newChat){
// 		console.log(newChat);
// 		socket.emit('chatTo', newChat);
// 		socket.broadcast.emit('chatTo', newChat);
// 	});
// });
// io.set('origins', "*:*");
// server.listen(8088);


var express = require('express'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat', function(msg){
	console.log(msg);
	io.emit('chatTo', msg);
});
});



http.listen(2708, function(){
	console.log('listening at port 2708');
});