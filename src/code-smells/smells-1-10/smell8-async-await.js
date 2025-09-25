// TODO: Identify the async/await issue in this code
// HINT: Look for missing await keywords and error handling
// DEBUGGING TIP: Use console.log() to track async operations

async function fetchUserData(userId) {
    // TODO: What's missing here?
    const response = fetch(`/api/users/${userId}`);
    const data = response.json();
    return data;
}

async function processUsers(userIds) {
    const results = [];
    for (const id of userIds) {
        // TODO: What's wrong with this async operation?
        const user = fetchUserData(id);
        results.push(user);
    }
    return results;
}

// TODO: What happens when you call processUsers([1, 2, 3])?
// TODO: How would you fix this async/await issue?
// TODO: What debugging techniques would you use to identify this issue?
