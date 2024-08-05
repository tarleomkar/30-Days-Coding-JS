// new
function fun() {
    let fName = "John";
    this.fName = fName;
}

console.log(new fun()); // fun { fName: 'John' }

var obj = new fun();
console.log(obj.fName);


