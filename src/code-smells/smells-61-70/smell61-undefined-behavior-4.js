// TODO: Identify the undefined behavior in this code
// DEBUGGING TIP: Use console.log() to check variable values

function processUser(user) {
    const fullName = user.firstName + ' ' + user.lastName;
    const age = user.age;
    const city = user.address.city;
    const country = user.address.country;
    
    return {
        fullName: fullName,
        age: age,
        location: city + ', ' + country
    };
}

function validateInput(input) {
    if (input.length > 0) {
        return input.trim();
    }
    return null;
}

// TODO: What happens when you call processUser(null)?
// TODO: What happens when you call validateInput(0)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
