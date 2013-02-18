var http = require('http');

http.createServer(function (req, res) {
    console.log('writing response header jean');
    res.writeHead(200, {'Content-Type': 'text/html'});
   console.log('writing response');
    res.end('Hello, world ! [helloworld sample; iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT || 8080);  