var reader = require('./directory_reader');

var directory = process.argv[2];
var filter = process.argv[3];

reader(directory, filter, function(err, files) {
    // console.log(err);
    // console.log(files);
    files.forEach((file) => console.log(file));
});