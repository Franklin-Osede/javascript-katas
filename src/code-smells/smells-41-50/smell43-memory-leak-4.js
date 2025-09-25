// TODO: Identify the memory leak in this code
// DEBUGGING TIP: Use console.log() to track memory usage

let globalCache = {};

function cacheData(key, data) {
    globalCache[key] = data;
}

function getCachedData(key) {
    return globalCache[key];
}

function createTimer() {
    setInterval(() => {
        console.log('Timer running...');
    }, 1000);
}

// TODO: What happens when you call cacheData multiple times?
// TODO: What happens when you call createTimer multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
