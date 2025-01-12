// Change Profile Picture
const profileInput = document.getElementById("profile-input");
const profileImg = document.getElementById("profile-img");

profileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Save New User ID
document.getElementById("save-user-id-btn").addEventListener("click", () => {
    const newUserId = document.getElementById("new-user-id").value.trim();
    if (newUserId) {
        alert(`User ID changed to: ${newUserId}`);
    } else {
        alert("Please enter a valid User ID.");
    }
});

// Save New Password
document.getElementById("save-password-btn").addEventListener("click", () => {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("New Password and Confirm Password do not match!");
        return;
    }

    if (currentPassword && newPassword) {
        alert("Password changed successfully!");
    } else {
        alert("Please fill in all the password fields.");
    }
});

// Placeholder for other buttons
document.getElementById("notifications-btn").addEventListener("click", () => {
    alert("Notifications toggled!");
});

document.getElementById("privacy-btn").addEventListener("click", () => {
    alert("Privacy settings updated!");
});

document.getElementById("logout-btn").addEventListener("click", () => {
    alert("Logged out!");
});
