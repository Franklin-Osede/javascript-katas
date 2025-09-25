// TODO: Identify the object mutation issue in this code
// DEBUGGING TIP: Use console.log() to track object state changes

function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

// TODO: What happens when you call mergeObjects with the same object multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
