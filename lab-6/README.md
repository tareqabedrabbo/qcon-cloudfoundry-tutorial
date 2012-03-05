# Simple Node.js App

In this lab we will write and deploy a simple app to serve static
content using `node.js`.

## Install Node.js

(Optional step if you want to test the app locally.) 

* Ubuntu users can use `apt-get`:
        $ sudo apt-get install nodejs
* Mac users can use Homebrew:
        $ brew install node
* Node.js is also available on MacPorts:
        $ sudo port install nodejs
* Others follow [instructions on node.js site](https://github.com/joyent/node/wiki/Installation).

## Create the app

Create an empty directory for your test app (lets call it static), and enter it.

    $ mkdir static && cd static

Cut and paste the following app into a `app.js`:

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
    
## Test the App Locally

Create some simple content in `index.html`, e.g.

    <html><body><h1>Hello World</h1></body></html>

and launch the app:

    $ node app.js
    
Visit the app in a browser: [http://localhost:8125/](http://localhost:8125/).

## Push the app to Cloud Foundry

Substitute your mcf subdomain (obtained when you register) for
`<my-mcf>` below.

    vmc target api.<my-mcf>.cloudfoundry.me
    vmc login
    vmc push static

## Test it in the browser:

Go to `http://static.<my-mcf>.cloudfoundry.me` in a browser.

## Check the status of your app by running:

    vmc apps

Which should yield the following output:

    +-------------+----+---------+-----------------------------------+----------+
    | Application | #  | Health  | URLS                              | Services |
    +-------------+----+---------+-----------------------------------+----------+
    | static      | 4  | RUNNING | static.<my-mcf>>.cloudfoundry.me  |          |
    +-------------+----+---------+-----------------------------------+----------+


## Bonus Points

Extend the app to server script and CSS content with an appropriate
content type header.
