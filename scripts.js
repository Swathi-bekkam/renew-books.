// Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Example validation: check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password.");
        return;
    }

    // Example: simulate login (replace with actual login logic)
    alert(`Logged in with email: ${email}`);
    // Redirect to home page or perform other actions after successful login
    window.location.href = "/"; // Redirect to home page
});

// Signup Form
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    // Example validation: check if all fields are not empty and passwords match
    if (fullName.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || phone.trim() === "" || address.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Example: simulate successful signup (replace with actual signup logic)
    alert(`Signed up with email: ${email}`);
    // Redirect to login page or perform other actions after successful signup
    window.location.href = "/login.html"; // Redirect to login page
});
