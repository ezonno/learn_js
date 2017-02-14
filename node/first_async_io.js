var fs = require('fs');

var contents = fs.readFile(process.argv[2], function(err, data) {
    var newlineCount = data.toString().split('\n').length -1;
    console.log(newlineCount);
});
