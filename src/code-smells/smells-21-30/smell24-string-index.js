// TODO: Identify the string index issue in this code
// HINT: Look for string access that might be out of bounds
// DEBUGGING TIP: Use console.log() to track string indices

function getStringCharacter(str, index) {
    // TODO: What happens if index is negative or too large?
    return str[index];
}

function reverseString(str) {
    let result = '';
    
    // TODO: What's wrong with this loop?
    for (let i = 0; i <= str.length; i++) {
        result = str[i] + result;
    }
    
    return result;
}

// TODO: What happens when you call getStringCharacter("hello", 10)?
// TODO: What happens when you call reverseString("hello")?
// TODO: How would you fix this string index issue?
// TODO: What debugging techniques would you use to identify this issue?
