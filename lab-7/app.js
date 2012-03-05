var http = require('http');

http.createServer(function (request, response) {
	console.log('crashing at ' + new Date());
  	process.exit(5);
}).listen(process.env.VCAP_APP_PORT || 8124);

console.log('Server started');

