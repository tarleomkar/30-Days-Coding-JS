const path = require('path');
console.log(__filename);
console.log(__dirname);


console.log(path.basename(__filename)); // path.js
console.log(path.basename(__dirname)); // path module
console.log(path.extname("path.js")); // .js

// path.join()
// Joins multiple path segments into one.
console.log(path.join("/user", "local", "index.html")); // "/user/local/index.html"

// path.resolve()
// Resolves a sequence of paths into an absolute path.
console.log(path.resolve("user", "local", "index.html")); // "/<current_dir>/user/local/index.html"
