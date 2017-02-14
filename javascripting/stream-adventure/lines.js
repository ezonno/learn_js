var through2 = require('through2');
var split = require('split');
var transform = through2(write, end);
var line = 0;


function write(buffer, encoding, next) {
    line++;
    this.push(`${(line % 2 === 0 ) ? buffer.toString().toUpperCase() : buffer.toString().toLowerCase()}\n`);
    next();
}

function end(done) {
    done();
}

process.stdin
    .pipe(split())
    .pipe(transform)
    .pipe(process.stdout);