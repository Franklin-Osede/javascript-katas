// TODO: Identify the infinite loop issue in this code
// DEBUGGING TIP: Use console.log() to track loop iterations

function processArray(arr) {
    let i = 0;
    let result = [];
    
    while (i < arr.length) {
        result.push(arr[i] * 2);
    }
    
    return result;
}

// TODO: What happens when you call processArray([1, 2, 3])?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
