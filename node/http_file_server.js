'use strict';

var fs = require('fs');
var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    var stream = fs.createReadStream(process.argv[3]);
    stream.pipe(response);
}).listen(process.argv[2]);