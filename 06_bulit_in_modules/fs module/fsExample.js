// The fs module in Node.js is used to interact with the file system. It provides methods to work with files and directories, including creating, reading, writing, updating, and deleting them.
const fs = require('fs');

// Operation 1 (Reading file)
// Asynchronous:
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    // console.log(data);
});
// I am learning node!

// Synchrnous
const data = fs.readFileSync('file.txt', 'utf-8');
// console.log(data); // I am learning node!

// Operation 2 (Writning Files)
// Asynchronous
/*
fs.writeFile('file.txt', 'Hello, file!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});
File written successfully!
*/

// Sync way
// fs.writeFileSync('file.txt', 'Hello wolrd!!');

// Operation 3 (Appendingg file) - adding text to file 
// Asynchronous:
/*
fs.appendFile('file.txt', '\nAppended Text', (err) => {
    if (err) throw err;
    console.log('Data appended successfully');
});
*/

// Synchronous
// fs.appendFileSync('file.txt', '\nAppended Text');
// Data appended success

// Operation 4 (deleting file)
/*
fs.unlink('file2.txt', (err) => {
    if (err) throw err;
    console.log('File deleted suceesully!');
});
*/

// Sync way
// fs.unlinkSync('file2.txt');


// Working with directories
// crating dir
// fs.mkdir('myFolder', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// });

// removing dir
// fs.rmdir('myFolder', (err) => {
//     if (err) throw err;
//     console.log('Directory removed');
// });

// reading directory contents
fs.readdir('myFolder', (err, files) => {
    if (err) throw err;
    console.log(files);
}); // [ 'demo.txt' ]

if (fs.existsSync('demo.txt')) {
    console.log('file exiss');
}
else {
    console.log('File does not exist');
}
// File does not exist