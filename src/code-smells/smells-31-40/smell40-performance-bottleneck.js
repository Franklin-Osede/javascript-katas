// TODO: Identify the performance bottleneck in this code
// DEBUGGING TIP: Use console.time() to measure performance

function findDuplicates(arr) {
    const duplicates = [];
    
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
    return data.map(item => {
        return JSON.parse(JSON.stringify(item));
    });
}

// TODO: What happens when you call findDuplicates with a large array?
// TODO: What happens when you call processLargeArray with a large dataset?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
