const fs = require('fs');

// Read from index.html
fs.readFileSync('index.html', 'utf8');

// Append to index.html
fs.appendFileSync('index.html', "\n<p>It Works</p>");

// Create an empty file 
const openSync = fs.closeSync(fs.openSync('test.txt', 'w'));


// Delete file
const unlinkSync = function () {
    try {
        fs.unlinkSync('test.txt');
        console.log('file successfully deleted');
    } catch (err) {
        console.log(err);
    }
}
unlinkSync(); 


// Create folder
const mkdirSync = function (dirPath) {
    try {
      fs.mkdirSync(dirPath)
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
    }
}

// mkdirSync('./folder');