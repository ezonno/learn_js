'use strict';

var http = require('http');
var url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');

    let result = '';

    response.on('data', (data) => {
        result += data;
    });
    response.on('error', console.error);

    response.on('end', () => {
        console.log(result.length);
        console.log(result);
    });
}).on('error', console.error);
