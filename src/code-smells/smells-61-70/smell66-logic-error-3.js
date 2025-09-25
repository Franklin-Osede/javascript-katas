// TODO: Identify the logic error in this code
// DEBUGGING TIP: Use console.log() to track boolean values

function isAdult(age) {
    if (age = 18) {
        return true;
    }
    return false;
}

function checkPassword(password) {
    if (password.length > 8 && password.length < 5) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    if (email.includes('@') || email.includes('.')) {
        return true;
    }
    return false;
}

// TODO: What happens when you call isAdult(25)?
// TODO: What happens when you call checkPassword("123456789")?
// TODO: What happens when you call validateEmail("invalid-email")?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
