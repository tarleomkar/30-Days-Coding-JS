// Recursion
// 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2.
/*
function printNumbersRecursive(n) {
    if(n <= 10) {
        console.log(n);
        printNumbersRecursive(n + 1)
    }
}

printNumbersRecursive(1);
*/

// 3. Factorial
// 5 = 5 * 4 * 3 * 2 * 1

function fact(n)
{
    if(n == 0) {
        return 1;
    }
    // else {
    //     return n * fact(n - 1);
    // }
    return n;
}

// console.log(fact(5)); // 120

// Logic
// n * fact(n-1)
console.log(5*fact(5-1)*fact(4-1)*fact(3-1)*fact(2-1)); // 120
