// TODO: Identify the stack overflow issue in this code
// DEBUGGING TIP: Use console.log() to track recursion depth

function fibonacci(n) {
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
    if (n > 0) {
        return n * factorial(n - 1);
    }
}

function countDown(n) {
    console.log(n);
    return countDown(n - 1);
}

// TODO: What happens when you call fibonacci(10)?
// TODO: What happens when you call factorial(-5)?
// TODO: What happens when you call countDown(5)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
