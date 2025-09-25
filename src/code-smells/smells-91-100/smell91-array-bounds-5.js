// TODO: Identify the array bounds issue in this code
// DEBUGGING TIP: Use console.log() to track array indices

function getArrayElements(arr, start, end) {
    const result = [];
    
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    
    return result;
}

// TODO: What happens when you call getArrayElements([1, 2, 3], 0, 5)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
