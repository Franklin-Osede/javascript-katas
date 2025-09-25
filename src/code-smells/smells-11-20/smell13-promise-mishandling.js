// TODO: Identify the promise mishandling issue in this code
// HINT: Look for missing error handling and promise chaining
// DEBUGGING TIP: Use console.log() to track promise states

function fetchData(url) {
    // TODO: What's missing in this promise handling?
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function processMultipleRequests(urls) {
    // TODO: What's wrong with this promise handling?
    const promises = urls.map(url => fetchData(url));
    return Promise.all(promises);
}

// TODO: What happens when the API returns an error?
// TODO: What happens when one of the requests fails?
// TODO: How would you fix this promise mishandling?
// TODO: What debugging techniques would you use to identify this issue?
