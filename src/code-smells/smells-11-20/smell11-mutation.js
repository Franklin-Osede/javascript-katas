// TODO: Identify the mutation issue in this code
// HINT: Look for direct object/array modifications
// DEBUGGING TIP: Use console.log() to track object state changes

function updateUser(user, newData) {
    // TODO: What's wrong with this direct mutation?
    user.name = newData.name;
    user.email = newData.email;
    user.age = newData.age;
    return user;
}

function processArray(arr) {
    // TODO: What's wrong with this array mutation?
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

// TODO: What happens when you call updateUser with the same object multiple times?
// TODO: What happens when you call processArray with the same array multiple times?
// TODO: How would you fix this mutation issue?
// TODO: What debugging techniques would you use to identify this issue?
