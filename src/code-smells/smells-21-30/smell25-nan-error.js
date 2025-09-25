// TODO: Identify the NaN error in this code
// HINT: Look for operations that might result in NaN
// DEBUGGING TIP: Use console.log() to check for NaN values

function calculatePercentage(value, total) {
    // TODO: What happens if total is 0 or value is not a number?
    return (value / total) * 100;
}

function processNumbers(arr) {
    let sum = 0;
    
    for (let num of arr) {
        // TODO: What happens if num is not a number?
        sum += num;
    }
    
    return sum / arr.length;
}

// TODO: What happens when you call calculatePercentage(10, 0)?
// TODO: What happens when you call processNumbers([1, "hello", 3])?
// TODO: How would you fix this NaN error?
// TODO: What debugging techniques would you use to identify this issue?
