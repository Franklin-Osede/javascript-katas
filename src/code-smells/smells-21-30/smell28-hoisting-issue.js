// TODO: Identify the hoisting issue in this code
// HINT: Look for variable declarations and function hoisting
// DEBUGGING TIP: Use console.log() to track variable values

function hoistingExample() {
    // TODO: What happens with this variable declaration?
    console.log(x); // What will this print?
    var x = 5;
    
    // TODO: What happens with this function declaration?
    console.log(y()); // What will this print?
    function y() {
        return "hello";
    }
}

// TODO: What happens when you call hoistingExample()?
// TODO: How would you fix this hoisting issue?
// TODO: What debugging techniques would you use to identify this issue?
