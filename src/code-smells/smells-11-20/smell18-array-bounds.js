// TODO: Identify the array bounds issue in this code
// HINT: Look for array access that might be out of bounds
// DEBUGGING TIP: Use console.log() to track array indices

function getArrayElements(arr, start, end) {
    const result = [];
    
    // TODO: What's wrong with this loop condition?
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    
    return result;
}

function findElement(arr, index) {
    // TODO: What happens if index is negative or too large?
    return arr[index];
}

// TODO: What happens when you call getArrayElements([1, 2, 3], 0, 5)?
// TODO: What happens when you call findElement([1, 2, 3], 10)?
// TODO: How would you fix this array bounds issue?
// TODO: What debugging techniques would you use to identify this issue?
