var fs = require('fs');

module.exports = function(directory, filter, callback) {

    var extension = '.' + filter;

    fs.readdir(directory, function(err, files) {
        if (err) return callback(err);

        var filtered = [];

        files.forEach((file) => {
            // console.log(extension);
            if (file.indexOf(extension, file.length - extension.length) !== -1) {
                filtered.push(file);
            }
        });

        callback(null, filtered);
    });
};