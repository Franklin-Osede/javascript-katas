// TODO: Identify the stack overflow issue in this code
// HINT: Look for recursive functions without proper base cases
// DEBUGGING TIP: Use console.log() to track recursion depth

function fibonacci(n) {
    // TODO: What's missing here that causes stack overflow?
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
    // TODO: What's wrong with this recursive function?
    if (n > 0) {
        return n * factorial(n - 1);
    }
}

// TODO: What happens when you call fibonacci(10)?
// TODO: What happens when you call factorial(-5)?
// TODO: How would you fix this stack overflow issue?
// TODO: What debugging techniques would you use to identify this issue?
