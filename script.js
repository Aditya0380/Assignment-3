const passwordInput = document.getElementById('password');
const checkButton = document.getElementById('check-password');
const resultDisplay = document.getElementById('result');


function checkPasswordStrength(password) {
    const length = password.length;

    
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (length < 6) {
        return "Weak (Too short)";
    }

    const score = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length;

    if (length >= 12 && score === 4) {
        return "Excellent";
    } else if (length >= 8 && score >= 3) {
        return "Strong";
    } else if (length >= 6 && score >= 2) {
        return "Good";
    } else {
        return "Weak";
    }
}


checkButton.addEventListener('click', () => {
    const password = passwordInput.value.trim();

    if (!password) {
        resultDisplay.textContent = "Please enter a password.";
        resultDisplay.style.color = "red";
        return;
    }

    const strength = checkPasswordStrength(password);
    resultDisplay.textContent = `Password Strength: ${strength}`;


    switch (strength) {
        case "Weak (Too short)":
        case "Weak":
            resultDisplay.style.color = "red";
            break;
        case "Good":
            resultDisplay.style.color = "orange";
            break;
        case "Strong":
            resultDisplay.style.color = "blue";
            break;
        case "Excellent":
            resultDisplay.style.color = "green";
            break;
    }
});
