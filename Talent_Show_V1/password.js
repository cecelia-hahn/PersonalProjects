function verifyPassword(inputPassword) {
    //change password here
    const correctPassword = "yes";
    if (inputPassword === correctPassword) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const userPassword = prompt("Judges, please enter password here:");
if (verifyPassword(userPassword)) {
    console.log("Password is correct.");
} else {
    window.location.href = "login.html";
    console.log("Password is incorrect.");
}