// function hello() {
//     console.log("Hello world!");
// }

// hello();

// 1. Built In module
// const add = require("./add")
// const sum = add(2, 3);
// const sum2 = add(2, 4);

// console.log(sum);
// console.log(sum2);

// console.log("hello there is nothing");

// 2. OS module
/*
const os = require('os');
const a = os.freemem();
const b = os.totalmem();
const c = os.userInfo();

console.log(a, b, c);
*/

// 3. Path module
/*
const path = require('path');
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

console.log(path.join('/hello','/hello','file.txt'));
*/

// 4. fs module
// async way
const fs = require('fs');
// fs.readFile('file.txt','utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// synchronous way
// const file = fs.readFileSync('file.txt', "utf8");
// console.log(file);

/*
fs.writeFile('text.txt', 'Subscribe us', (err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('File written successfully');
});
*/

fs.writeFileSync('text2.txt', "Hello i am text 2", 'utf-8')
console.log('file written successfully');
