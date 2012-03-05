var http = require('http');
var fs = require('fs');
var path = require('path');

var port = (process.env.VCAP_APP_PORT || 8125);
 
http.createServer(function (request, response) {
    
    console.log('request starting...');
    
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    
    var contentType = 'text/html';
    
    path.exists(filePath, function(exists) {
        
        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                        response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
        });
    
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);
