// TODO: Identify the scope pollution issue in this code
// HINT: Look for variables declared without proper scope
// DEBUGGING TIP: Use console.log() to track variable scope

function processData(data) {
    // TODO: What's wrong with this variable declaration?
    for (var i = 0; i < data.length; i++) {
        // Process data
    }
    
    // TODO: What happens with this variable?
    console.log(i); // What will this print?
}

// TODO: What happens when you call processData([1, 2, 3])?
// TODO: How would you fix this scope pollution issue?
// TODO: What debugging techniques would you use to identify this issue?
