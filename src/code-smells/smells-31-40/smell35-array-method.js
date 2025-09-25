// TODO: Identify the array method issue in this code
// DEBUGGING TIP: Use console.log() to track array state changes

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function sortUsers(users) {
    return users.sort((a, b) => a.name.localeCompare(b.name));
}

function removeDuplicates(arr) {
    return arr.splice(0, arr.length, ...new Set(arr));
}

// TODO: What happens when you call these functions with the same array multiple times?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
