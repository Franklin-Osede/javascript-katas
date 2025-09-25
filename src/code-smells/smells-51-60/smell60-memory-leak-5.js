// TODO: Identify the memory leak in this code
// DEBUGGING TIP: Use console.log() to track memory usage

function createDataProcessor() {
    const largeData = new Array(1000000).fill(0).map((_, i) => ({ id: i, data: `item-${i}` }));
    
    return function processItem(itemId) {
        return largeData.find(item => item.id === itemId);
    };
}

let globalData = [];

function addToGlobalData(item) {
    globalData.push(item);
}

// TODO: What happens when you create multiple processors?
// TODO: What happens when you call addToGlobalData multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
