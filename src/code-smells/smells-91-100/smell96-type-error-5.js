// TODO: Identify the type error in this code
// DEBUGGING TIP: Use console.log() to check variable types

function processData(data) {
    return data.users.map(user => {
        return {
            id: user.id,
            name: user.name.toUpperCase(),
            age: user.age + 1
        };
    });
}

// TODO: What happens when you call processData("string")?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
