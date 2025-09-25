// TODO: Identify the async/await issue in this code
// DEBUGGING TIP: Use console.log() to track async operations

async function fetchUserData(userId) {
    const response = fetch(`/api/users/${userId}`);
    const data = response.json();
    return data;
}

// TODO: What happens when you call fetchUserData(1)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
