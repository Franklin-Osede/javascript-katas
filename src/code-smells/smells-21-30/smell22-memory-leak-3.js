// TODO: Identify the memory leak in this code
// HINT: Look for global variables and closures
// DEBUGGING TIP: Use console.log() to track memory usage

// TODO: What's wrong with this global variable?
let globalData = [];

function addToGlobalData(item) {
    globalData.push(item);
    // TODO: What's missing here that causes memory leak?
}

function createClosure() {
    const largeArray = new Array(1000000).fill(0);
    
    return function() {
        // TODO: What's wrong with this closure?
        return largeArray.length;
    };
}

// TODO: What happens when you call addToGlobalData multiple times?
// TODO: What happens when you create multiple closures?
// TODO: How would you fix this memory leak?
// TODO: What debugging techniques would you use to identify this issue?
