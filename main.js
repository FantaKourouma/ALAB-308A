// Part 1:

let counter = 0;
function overflowStack() {
    counter++;
    try {
        overflowStack();
    } catch (error) {
        console.log("Maximum call stack size exceeded at: " + counter);
    }
}
overflowStack();


// Part 2:

function trampoline(fn) {
    return function (...args) {
        let result = fn(...args);
        while (typeof result == "function") {
            result = result();
        }
        return result;
    };
}

function recursiveCall(count) {
    if (count <= 0) {
        return count;
    }
    return () => recursiveCall(count - 1);
}

const trampolineFunc = trampoline(recursiveCall);
trampolineFunc(3000); // Handled without stack overflow.


// Part 3:

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]



const outputElement = document.getElementById('output');
let primes = [];

function isPrime(num) {
    if(num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function addPrimes(n, i = 2) {
    if (i > n) {
        alert("Calculation complete");
        return;
    }
    if (isPrime(i)) {
        primes.push(i);
        outputElement.innerHTML += `${i} `;
    }
    setTimeout(() => addPrimes(n, i + 1), 0); // Defer execution to allow browser rendering
}

addPrimes(10000);