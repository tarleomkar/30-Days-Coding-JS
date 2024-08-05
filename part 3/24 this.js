// In JavaScript, this is a keyword that refers to the context in which a function is executed. The value of this can vary depending on where and how the function is called. Here are a few key points about this:

// 1.Global Context: 
// When used outside of any function, in the global scope, this refers to the global object. In a web browser, this global object is window.
console.log(this); // In browser, this will log the window object

// 2. Object Method Context: 
// When a function is called as a method of an object, this refers to the object the method is called on.
const obj = {
    name: "Omi",
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // 'this' refers to 'obj', so it logs 'Omi'

// Constructor Function Context:
// When a function is used as a constructor with the new keyword, this refers to the new object being created.
function Person(name) {
    this.name = name;
}

const person1 = new Person('Bobi');
console.log(person1.name); // 'this' refers to the new object, so it logs 'Bob'

// 4.Event Listener Context:
// In event listeners, this refers to the element that received the event.
// document.getElementById('myButton').addEventListener('click', function() {
    // console.log(this);
// });

// 5.Arrow Functions: 
// Arrow functions have a different behavior. They do not have their own this context; instead, they inherit this from the surrounding lexical context.

const obje = {
    name: 'charlie',
    greet2: function() {
        const arrowFunc = () => {
            console.log(this.name); // 'this' refers to 'obj' because the arrow function inherits 'this'
        };
        arrowFunc();
    }
};

obje.greet2(); // charlie