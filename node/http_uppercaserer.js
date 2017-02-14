'use strict';

var http = require('http');
var map = require('through2-map');

http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end('send me a POST\n');
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);

}).listen(process.argv[2]);