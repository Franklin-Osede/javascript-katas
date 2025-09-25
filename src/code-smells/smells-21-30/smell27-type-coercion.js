// TODO: Identify the type coercion issue in this code
// HINT: Look for implicit type conversions
// DEBUGGING TIP: Use console.log() to check variable types

function compareValues(a, b) {
    // TODO: What's wrong with this comparison?
    if (a == b) {
        return true;
    }
    return false;
}

function processInput(input) {
    // TODO: What happens with different input types?
    if (input) {
        return input.length;
    }
    return 0;
}

// TODO: What happens when you call compareValues(0, "0")?
// TODO: What happens when you call processInput(0)?
// TODO: How would you fix this type coercion issue?
// TODO: What debugging techniques would you use to identify this issue?
