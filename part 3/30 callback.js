// function (callback) is passed as an argument to another function (add) and is then executed inside that function. This technique is often used for asynchronous operations, event handling, or any scenario where you want to defer execution until a certain point in your code.

// Breakdown
// 1. fun Function:
function fun(val) {
    console.log(val);
}

// This is a simple function that takes a parameter val and logs it to the console.
// 2. add Function:
function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}
// This function takes three parameters: a, b, and callback.
// It calculates the sum of a and b and then calls the callback function with the sum as an argument.

// 3.Calling add with fun as a Callback:
add(5, 10, fun);
// Here, the add function is called with the numbers 5 and 10, and the function fun is passed as the callback.
// Inside add, the sum is calculated as 15, and fun(sum) is called, which logs 15 to the console.

// Why Use Callbacks?
// Callbacks are used for several reasons:

// 1. Asynchronous Operations: Callbacks are often used in situations where you need to wait for an operation to complete before executing another function, such as reading files, making API calls, or handling user interactions.

// 2. Modular Code: Callbacks allow for more modular and reusable code. By passing functions as arguments, you can easily change what happens after a certain operation without modifying the operation itself.

// 3. Event Handling: Callbacks are a foundational pattern in event-driven programming. When an event occurs, a callback function is executed to handle that event.

// Example with Asynchronous Code
// While your example is synchronous, callbacks are especially useful in asynchronous contexts:

function fetchData(callback) {
    setTimeout(() => {
        let data = "Data fetched";
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Logs "Data fetched" after 2 seconds
// In this example, fetchData simulates an asynchronous operation (e.g., fetching data from a server), and displayData is the callback function that handles the fetched data once it's available.

// Conclusion
// Your use of the callback pattern in the provided code is correct and demonstrates a fundamental concept in JavaScript programming. This style is not only appropriate but also a powerful tool for writing flexible and maintainable code.