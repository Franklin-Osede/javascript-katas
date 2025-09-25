// TODO: Identify the array mutation issue in this code
// HINT: Look for methods that modify the original array
// DEBUGGING TIP: Use console.log() to track array state changes

function filterEvenNumbers(numbers) {
    // TODO: What's wrong with this array method?
    return numbers.filter(num => num % 2 === 0);
}

function sortUsers(users) {
    // TODO: What's wrong with this array method?
    return users.sort((a, b) => a.name.localeCompare(b.name));
}

function removeDuplicates(arr) {
    // TODO: What's wrong with this array method?
    return arr.splice(0, arr.length, ...new Set(arr));
}

// TODO: What happens when you call these functions with the same array multiple times?
// TODO: How would you fix this array mutation issue?
// TODO: What debugging techniques would you use to identify this issue?
