// TODO: Identify the race condition in this code
// DEBUGGING TIP: Use console.log() to track async operations

let sharedCounter = 0;

async function incrementSharedCounter() {
    const currentValue = sharedCounter;
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    sharedCounter = currentValue + 1;
}

// TODO: What happens when you call incrementSharedCounter multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
