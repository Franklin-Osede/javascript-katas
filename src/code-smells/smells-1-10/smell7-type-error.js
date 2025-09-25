// TODO: Identify the type error in this code
// HINT: Look for type mismatches and incorrect property access
// DEBUGGING TIP: Use console.log() to check variable types

function processData(data) {
    // TODO: What happens if data is not an object?
    return data.users.map(user => {
        return {
            id: user.id,
            name: user.name.toUpperCase(),
            age: user.age + 1
        };
    });
}

// TODO: What happens when you call processData("string")?
// TODO: What happens when you call processData({ users: null })?
// TODO: How would you fix this type error?
// TODO: What debugging techniques would you use to identify this issue?
