// TODO: Identify the race condition in this code
// DEBUGGING TIP: Use console.log() to track async operations

let userData = null;

async function loadUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    userData = await response.json();
}

async function updateUserData(updates) {
    const response = await fetch(`/api/users/${userData.id}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
    });
    userData = await response.json();
}

// TODO: What happens when you call loadUserData and updateUserData simultaneously?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
