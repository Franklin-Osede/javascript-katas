// TODO: Identify the this binding issue in this code
// HINT: Look for function calls that lose their context
// DEBUGGING TIP: Use console.log() to track this context

const obj = {
    name: 'John',
    greet: function() {
        // TODO: What happens with this function call?
        return 'Hello, ' + this.name;
    }
};

function callGreet() {
    // TODO: What's wrong with this function call?
    return obj.greet();
}

// TODO: What happens when you call callGreet()?
// TODO: How would you fix this this binding issue?
// TODO: What debugging techniques would you use to identify this issue?
