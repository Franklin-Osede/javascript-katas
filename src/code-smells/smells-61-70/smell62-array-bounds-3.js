// TODO: Identify the array bounds issue in this code
// DEBUGGING TIP: Use console.log() to track array indices

function getArrayElements(arr, start, end) {
    const result = [];
    
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    
    return result;
}

function findElement(arr, index) {
    return arr[index];
}

function processArray(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}

// TODO: What happens when you call getArrayElements([1, 2, 3], 0, 5)?
// TODO: What happens when you call findElement([1, 2, 3], 10)?
// TODO: What happens when you call processArray([1, 2, 3])?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
