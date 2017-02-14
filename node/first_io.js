var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var newlineCount = contents.toString().split('\n').length -1;


console.log(newlineCount);