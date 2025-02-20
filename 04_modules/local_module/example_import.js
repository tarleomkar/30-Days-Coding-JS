// const msg = require('./example_export')
// console.log(msg);

// msg.sayHello(); // Hello 
// msg.sayThanks(); // Thankyou

// 2nd. way
// exports: (taked directly refrence likewise)
const msg = require("./exports.js");

msg.sayHello();
msg.sayThanks();