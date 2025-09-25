// TODO: Identify the undefined behavior in this code
// HINT: Look for variables that might be undefined in different contexts
// DEBUGGING TIP: Use console.log() to check variable values

function processUserData(user) {
    // TODO: What happens if user is null or undefined?
    const fullName = user.firstName + ' ' + user.lastName;
    const age = user.age;
    
    // TODO: What happens if user.address is undefined?
    const city = user.address.city;
    const country = user.address.country;
    
    return {
        fullName: fullName,
        age: age,
        location: city + ', ' + country
    };
}

// TODO: What happens when you call processUserData(null)?
// TODO: What happens when you call processUserData({ firstName: 'John' })?
// TODO: How would you fix this undefined behavior?
// TODO: What debugging techniques would you use to identify this issue?
