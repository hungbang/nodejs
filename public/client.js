$(document).ready(function() {	
	var socket = io.connect('http://127.0.0.1:2708');
	socket.on('text', function(data) {
		console.log(data);
	});

	// socket.on('chat', function(data){
	// 	$('message').append($('<li>').text(data));
	// })
	socket.on("chatTo", function(msg){
		console.log(msg);
		$('#message').append($('<li>').text(msg));
	});

	$('#txtText').keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == 13){
			fnSubmit(event);
		}
	});
});
var socket = io.connect('http://127.0.0.1:2708');
function fnSubmit(ev){
	var newChat = document.getElementById('txtText');
	var content = document.getElementById('content');
	socket.emit('chat', newChat.value);
	newChat.value = "";
	return false;
}

