// TODO: Identify the event listener issue in this code
// DEBUGGING TIP: Use console.log() to track event listeners

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    
    button.addEventListener('click', function() {
        console.log('Button clicked!');
        // Some heavy operation
        for (let i = 0; i < 1000000; i++) {
            Math.random();
        }
    });
    
    document.body.appendChild(button);
}

// TODO: What happens when you call createButton multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
