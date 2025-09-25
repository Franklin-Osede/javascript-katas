// TODO: Identify the division by zero issue in this code
// DEBUGGING TIP: Use console.log() to check divisor values

function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    
    return sum / numbers.length;
}

function divideNumbers(a, b) {
    return a / b;
}

function calculateRatio(a, b) {
    return a / b;
}

// TODO: What happens when you call calculateAverage([])?
// TODO: What happens when you call divideNumbers(10, 0)?
// TODO: What happens when you call calculateRatio(10, 0)?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
