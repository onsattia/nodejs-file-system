var fs = require('fs');

// Read from index.html
var readFile = fs.readFileSync('index.html', 'utf8');

// Append to index.html
fs.appendFileSync('index.html', "\n<p>It Works</p>");

// Create an empty file 
fs.closeSync(fs.openSync('test.txt', 'w'));

