'use strict';

var http = require('http');
var url = require('url');


http.createServer((request, response) => {
    if (request.method !== 'GET') {
        return response.end('send me a GET\n');
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })

    var parsed = url.parse(request.url, true);
    var date;

    if (parsed.pathname === '/api/unixtime') {
        date = new Date(parsed.query.iso);
        return response.end(JSON.stringify({ unixtime: date.getTime() }));
    } else if (parsed.pathname === '/api/parsetime') {
        date = new Date(parsed.query.iso);
        return response.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    } else {
        return response.end('Not a valid endpoint');
    }

}).listen(process.argv[2]);