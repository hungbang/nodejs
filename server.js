var http = require('http');
http.createServer(function(req, res){
	res.end('hello world');
}).listen(1088);


console.log('server is running at localhost:1088');