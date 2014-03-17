
var fs = require('fs')
var filename = fs.readFileSync(process.argv[2]).toString();
var lines = filename.split('\n');

console.log(lines.length-1);
