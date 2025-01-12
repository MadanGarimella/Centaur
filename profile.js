document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file-input");
    const uploadBtn = document.getElementById("upload-btn");
    const profileImg = document.getElementById("profile-img");
    const saveBtn = document.getElementById("save-btn");
    const nameInput = document.getElementById("name");
    const statusInput = document.getElementById("status");

    // Load existing data (if any) from localStorage
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) {
        profileImg.src = storedProfile.image;
        nameInput.value = storedProfile.name;
        statusInput.value = storedProfile.status;
    }

    // Trigger the file input dialog when the button is clicked
    uploadBtn.addEventListener("click", () => {
        fileInput.click();
    });

    // Update the profile image when a file is selected
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImg.src = e.target.result; // Set the selected image as the profile picture
            };
            reader.readAsDataURL(file);
        }
    });

    // Save profile details and show a success message
    saveBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const status = statusInput.value.trim();
        const image = profileImg.src;

        if (name && status) {
            // Save profile details to localStorage
            const userProfile = {
                name: name,
                status: status,
                image: image,
            };
            localStorage.setItem("userProfile", JSON.stringify(userProfile));

            // Show a success message
            alert("Profile updated successfully!");

            // Optionally update the home page
            updateHomePage(userProfile);
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Function to update the home page with new profile details
    function updateHomePage(userProfile) {
        // Example: Assuming you have an element on the home page to display this info
        const homeName = document.getElementById("home-name");
        const homeStatus = document.getElementById("home-status");
        const homeImage = document.getElementById("home-img");

        if (homeName) homeName.textContent = userProfile.name;
        if (homeStatus) homeStatus.textContent = userProfile.status;
        if (homeImage) homeImage.src = userProfile.image;
    }
});
