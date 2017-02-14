'use strict';

var http = require('http');

var urls = [];
var result = [];
var count = 0;

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

urls.forEach((url, key) => {
    http.get(url, (response) => {

        var buffer = '';
        response.setEncoding('utf8');
        response.on('data', (data) => {
            buffer += data;
        });

        response.on('end', () => {
            result[key] = buffer;

            if (result.length === 3) {
                console.log(result[0]);
                console.log(result[1]);
                console.log(result[2]);
            }
        });
    }).on('error', console.error);
});


