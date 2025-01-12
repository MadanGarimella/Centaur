document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgot-password-form');
    const emailInput = document.getElementById('email');
    const infoMessage = document.getElementById('infoMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;

        if (validateEmail(email)) {
            infoMessage.style.color = 'green';
            infoMessage.textContent = 'Password reset link sent! Check your email.';
            emailInput.value = '';
        } else {
            infoMessage.style.color = 'red';
            infoMessage.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email); 
    }
});
