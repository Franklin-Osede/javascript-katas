// TODO: Identify the infinite loop in this code
// HINT: Look at the loop condition and variable modification
// DEBUGGING TIP: Use console.log() to track loop iterations

function processArray(arr) {
    let i = 0;
    let result = [];
    
    // TODO: What's wrong with this loop condition?
    while (i < arr.length) {
        result.push(arr[i] * 2);
        // TODO: What's missing here that causes infinite loop?
        // TODO: How would you fix this?
    }
    
    return result;
}

// TODO: What happens when you call processArray([1, 2, 3])?
// TODO: How would you debug this without crashing your browser?
// TODO: What debugging techniques would you use to identify this issue?
// TODO: How would you prevent this in the future?
