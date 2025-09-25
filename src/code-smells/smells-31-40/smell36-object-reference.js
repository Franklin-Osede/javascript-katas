// TODO: Identify the object reference issue in this code
// DEBUGGING TIP: Use console.log() to track object state changes

function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

function updateNestedObject(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    return obj;
}

// TODO: What happens when you call mergeObjects with the same object multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
