// TODO: Identify the promise mishandling issue in this code
// DEBUGGING TIP: Use console.log() to track promise states

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function processMultipleRequests(urls) {
    const promises = urls.map(url => fetchData(url));
    return Promise.all(promises);
}

function handleErrors() {
    fetchData('/api/data')
        .then(result => {
            console.log(result);
        });
}

// TODO: What happens when the API returns an error?
// TODO: What happens when one of the requests fails?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
