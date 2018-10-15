const fs = require('fs');

// Read from index.html
const readFile = filename => fs.readFileSync(filename, 'utf8');

// Usage
// console.log(readFile("index.html"));

// Append to index.html
const appendFile = (filename, text) => fs.appendFileSync(filename, text);

// Usage
// appendFile("index.html"," <p>Test function</p>");


// Create an empty file 
const createFile = filename => fs.closeSync(fs.openSync(filename, 'w'));

// Usage
// createFile('file.txt');

// Delete file
const unlinkSync =  (fileName) => {
    try {
        fs.unlinkSync(fileName);
        console.log('file successfully deleted');
    } catch (err) {
        console.log(err);
    }
}

// Usage
// unlinkSync('file.txt');

// Create folder
const mkdirSync =  (dirPath) => {
    try {
      fs.mkdirSync(dirPath)
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
    }
}

// Usage
// mkdirSync('./folder');