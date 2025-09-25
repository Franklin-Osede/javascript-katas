// TODO: Identify the division by zero issue in this code
// DEBUGGING TIP: Use console.log() to check divisor values

function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    
    return sum / numbers.length;
}

// TODO: What happens when you call calculateAverage([])?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
