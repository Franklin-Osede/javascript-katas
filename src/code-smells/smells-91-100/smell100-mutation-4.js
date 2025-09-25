// TODO: Identify the mutation issue in this code
// DEBUGGING TIP: Use console.log() to track object state changes

function updateUser(user, newData) {
    user.name = newData.name;
    user.email = newData.email;
    user.age = newData.age;
    return user;
}

// TODO: What happens when you call updateUser with the same object multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
