// const add = (a, b) => {
//     return a + b;
// }

// const sum = add(2, 4); // 6
// console.log(sum);

// Use local modules instead
const adding = require('./add'); 
const sum = adding(2, 3);
const sum2 = adding(2, 1);
console.log(sum); // 5
console.log(sum2); // 3

// require('./hello') // hello 🙋‍♂️!