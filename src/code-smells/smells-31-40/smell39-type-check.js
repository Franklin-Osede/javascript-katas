// TODO: Identify the type check issue in this code
// DEBUGGING TIP: Use console.log() to check variable types

function processData(data) {
    if (data) {
        return data.map(item => {
            return {
                id: item.id,
                name: item.name.toUpperCase(),
                age: item.age + 1
            };
        });
    }
    return [];
}

function validateInput(input) {
    if (input.length > 0) {
        return input.trim();
    }
    return null;
}

// TODO: What happens when you call processData(null)?
// TODO: What happens when you call validateInput(0)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
