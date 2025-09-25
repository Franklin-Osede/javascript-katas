// TODO: Identify the undefined behavior in this code
// HINT: Look for variables that might be undefined
// DEBUGGING TIP: Use console.log() to check variable values

function getUserData(userId) {
    // TODO: What happens if userId is undefined?
    const user = users.find(u => u.id === userId);
    
    // TODO: What happens if user is not found?
    return {
        name: user.name,
        email: user.email,
        age: user.age
    };
}

// TODO: What happens when you call getUserData() without arguments?
// TODO: What happens when you call getUserData(999) with non-existent ID?
// TODO: How would you fix this to handle undefined cases?
// TODO: What debugging techniques would you use to identify this issue?
