// TODO: Identify the scope issue in this code
// DEBUGGING TIP: Use console.log() to track variable values

function createCounter() {
    let count = 0;
    
    return function() {
        count = count + 1;
        return count;
    };
}

function processItems(items) {
    const results = [];
    
    for (var i = 0; i < items.length; i++) {
        setTimeout(function() {
            results.push(items[i]);
        }, 100);
    }
    
    return results;
}

// TODO: What happens when you call createCounter() multiple times?
// TODO: What happens when you call processItems([1, 2, 3])?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
