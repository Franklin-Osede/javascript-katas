// TODO: Identify the memory leak in this code
// HINT: Look for event listeners that are never removed
// DEBUGGING TIP: Use console.log() to track if cleanup functions are called

function createUserInterface() {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    
    // This event listener is added but never removed
    button.addEventListener('click', function() {
        console.log('Button clicked!');
        // Some heavy operation
        for (let i = 0; i < 1000000; i++) {
            Math.random();
        }
    });
    
    document.body.appendChild(button);
    
    // TODO: What's missing here that causes memory leak?
    // TODO: How would you fix this?
    // TODO: What debugging techniques would you use to identify this issue?
}

// TODO: What happens when this function is called multiple times?
// TODO: How would you test for memory leaks?
// TODO: What tools would you use to detect this in production?
