// TODO: Identify the promise chain issue in this code
// DEBUGGING TIP: Use console.log() to track promise states

function processData(data) {
    return fetch('/api/process', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        return fetch(`/api/validate/${result.id}`)
    })
    .then(response => response.json())
    .then(validation => {
        return fetch(`/api/save/${validation.id}`)
    })
    .then(response => response.json());
}

// TODO: What happens when any of these API calls fail?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
