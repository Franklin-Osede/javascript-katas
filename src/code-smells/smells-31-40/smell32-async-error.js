// TODO: Identify the async error in this code
// DEBUGGING TIP: Use console.log() to track async operations

async function fetchUserData(userId) {
    const response = fetch(`/api/users/${userId}`);
    const data = response.json();
    return data;
}

async function processUsers(userIds) {
    const results = [];
    for (const id of userIds) {
        const user = fetchUserData(id);
        results.push(user);
    }
    return results;
}

// TODO: What happens when you call processUsers([1, 2, 3])?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
