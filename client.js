$(document).ready(function() {	
	var socket = io.connect('http://127.0.0.1:8088');
	socket.on('text', function(data) {
		console.log(data);
	});


});
var socket = io.connect('http://127.0.0.1:8088');
function fnSubmit(ev){
	var user = document.getElementById('user').value;
	socket.emit('new-user', user);
}