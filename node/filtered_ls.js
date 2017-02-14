'use strict';

let dir = process.argv[2];
let extension = '.'+process.argv[3];

var fs = require('fs');

fs.readdir(dir, function(err, files) {
    if (err) return console.error(err);

    files.forEach((file) => {
        // console.log(extension);
        if (file.indexOf(extension, file.length - extension.length) !== -1) {
            console.log(file);
        }
    });
});