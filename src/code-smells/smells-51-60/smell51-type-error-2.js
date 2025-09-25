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

function validateInput(input) {
    if (input.length > 0) {
        return input.trim();
    }
    return null;
}

// TODO: What happens when you call processData("string")?
// TODO: What happens when you call validateInput(0)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
