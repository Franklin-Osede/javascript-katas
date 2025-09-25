// TODO: Identify the off-by-one error in this code
// HINT: Look at array indexing and loop boundaries
// DEBUGGING TIP: Use console.log() to track array indices

function getLastElement(arr) {
    // TODO: What's wrong with this array access?
    return arr[arr.length];
}

function processArrayElements(arr) {
    for (let i = 0; i <= arr.length; i++) {
        // TODO: What happens when i equals arr.length?
        console.log(arr[i]);
    }
}

// TODO: What happens when you call getLastElement([1, 2, 3])?
// TODO: What happens when you call processArrayElements([1, 2, 3])?
// TODO: How would you fix these off-by-one errors?
// TODO: What debugging techniques would you use to identify this issue?
