// TODO: Identify the race condition in this code
// HINT: Look for shared state and async operations
// DEBUGGING TIP: Use console.log() to track async operations

let sharedCounter = 0;

async function incrementSharedCounter() {
    // TODO: What's wrong with this async operation?
    const currentValue = sharedCounter;
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    sharedCounter = currentValue + 1;
}

async function processData(data) {
    // TODO: What's wrong with this async operation?
    const result = await fetch('/api/process', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    
    // TODO: What happens if this fails?
    return result.json();
}

// TODO: What happens when you call incrementSharedCounter multiple times?
// TODO: What happens when you call processData with the same data multiple times?
// TODO: How would you fix this race condition?
// TODO: What debugging techniques would you use to identify this issue?
