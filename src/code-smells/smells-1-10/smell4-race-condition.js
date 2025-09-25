// TODO: Identify the race condition in this code
// HINT: Look for async operations that depend on each other
// DEBUGGING TIP: Use console.log() to track async operations

let counter = 0;

async function incrementCounter() {
    // TODO: What's wrong with this async operation?
    const currentValue = counter;
    await new Promise(resolve => setTimeout(resolve, 100));
    counter = currentValue + 1;
}

// TODO: What happens when you call incrementCounter() multiple times simultaneously?
// TODO: How would you fix this race condition?
// TODO: What debugging techniques would you use to identify this issue?
// TODO: How would you test for race conditions?

// Example usage that demonstrates the problem:
// incrementCounter();
// incrementCounter();
// incrementCounter();
