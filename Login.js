document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;


    if (validateEmail(email) && password.trim() !== '') {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Mock login process
  if (username && password) {
      // Assuming the user is authenticated successfully
      localStorage.setItem('authenticated', true);
      window.location.href = 'Main_Page.html'; // Redirect to main page
  } else {
      alert('Please enter valid credentials.');
  }
});

