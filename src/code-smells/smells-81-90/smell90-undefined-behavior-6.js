// TODO: Identify the undefined behavior in this code
// DEBUGGING TIP: Use console.log() to check variable values

function processUser(user) {
    const fullName = user.firstName + ' ' + user.lastName;
    const age = user.age;
    const city = user.address.city;
    
    return {
        fullName: fullName,
        age: age,
        location: city
    };
}

// TODO: What happens when you call processUser(null)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
