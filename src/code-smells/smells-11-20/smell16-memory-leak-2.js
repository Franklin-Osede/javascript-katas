// TODO: Identify the memory leak in this code
// HINT: Look for closures that capture large objects
// DEBUGGING TIP: Use console.log() to track memory usage

function createDataProcessor() {
    const largeData = new Array(1000000).fill(0).map((_, i) => ({ id: i, data: `item-${i}` }));
    
    return function processItem(itemId) {
        // TODO: What's wrong with this closure?
        return largeData.find(item => item.id === itemId);
    };
}

// TODO: What happens when you create multiple processors?
// TODO: How would you fix this memory leak?
// TODO: What debugging techniques would you use to identify this issue?
