// TODO: Identify the division by zero issue in this code
// HINT: Look for division operations without zero checks
// DEBUGGING TIP: Use console.log() to check divisor values

function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    
    // TODO: What happens if numbers array is empty?
    return sum / numbers.length;
}

function divideNumbers(a, b) {
    // TODO: What happens if b is 0?
    return a / b;
}

// TODO: What happens when you call calculateAverage([])?
// TODO: What happens when you call divideNumbers(10, 0)?
// TODO: How would you fix this division by zero issue?
// TODO: What debugging techniques would you use to identify this issue?
