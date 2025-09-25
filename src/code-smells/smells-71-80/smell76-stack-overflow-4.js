// TODO: Identify the stack overflow issue in this code
// DEBUGGING TIP: Use console.log() to track recursion depth

function fibonacci(n) {
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// TODO: What happens when you call fibonacci(10)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
