// TODO: Identify the promise mishandling issue in this code
// DEBUGGING TIP: Use console.log() to track promise states

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// TODO: What happens when the API returns an error?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
