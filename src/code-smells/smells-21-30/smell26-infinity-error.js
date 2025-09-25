// TODO: Identify the infinity error in this code
// HINT: Look for operations that might result in Infinity
// DEBUGGING TIP: Use console.log() to check for Infinity values

function calculateRatio(a, b) {
    // TODO: What happens if b is 0?
    return a / b;
}

function processLargeNumbers(arr) {
    let product = 1;
    
    for (let num of arr) {
        // TODO: What happens if num is very large?
        product *= num;
    }
    
    return product;
}

// TODO: What happens when you call calculateRatio(10, 0)?
// TODO: What happens when you call processLargeNumbers([1e100, 1e100, 1e100])?
// TODO: How would you fix this infinity error?
// TODO: What debugging techniques would you use to identify this issue?
