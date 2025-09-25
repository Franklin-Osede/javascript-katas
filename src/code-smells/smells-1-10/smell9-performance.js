// TODO: Identify the performance issue in this code
// HINT: Look for inefficient algorithms and unnecessary operations
// DEBUGGING TIP: Use console.time() to measure performance

function findDuplicates(arr) {
    const duplicates = [];
    
    // TODO: What's inefficient about this nested loop?
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    
    return duplicates;
}

function processLargeArray(data) {
    // TODO: What's wrong with this operation?
    return data.map(item => {
        return JSON.parse(JSON.stringify(item));
    });
}

// TODO: What happens when you call findDuplicates with a large array?
// TODO: How would you optimize this performance issue?
// TODO: What debugging techniques would you use to identify this issue?
