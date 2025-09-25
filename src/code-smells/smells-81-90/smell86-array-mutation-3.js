// TODO: Identify the array mutation issue in this code
// DEBUGGING TIP: Use console.log() to track array state changes

function sortUsers(users) {
    return users.sort((a, b) => a.name.localeCompare(b.name));
}

// TODO: What happens when you call sortUsers with the same array multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
