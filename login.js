// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert('Login successful');
                // Perform login logic here (e.g., sending data to the server)
            } else {
                alert('Please fill in both fields');
            }
        });
    }

    if (resetPasswordBtn) {
        resetPasswordBtn.addEventListener('click', function() {
            window.location.href = 'reset-password.html';
        });
    }

    // Reset Password Page JavaScript
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmNewPassword = document.getElementById('confirmNewPassword').value;

            if (newPassword && confirmNewPassword) {
                if (newPassword === confirmNewPassword) {
                    alert('Password reset successful');
                    // Perform password reset logic here (e.g., sending data to the server)
                } else {
                    alert('Passwords do not match');
                }
            } else {
                alert('Please fill in both fields');
            }
        });
    }
});
