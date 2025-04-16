// Event listener for the login button
document.querySelector('.btnn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    
    // Get the values of the input fields
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    // Basic validation: Check if email and password are provided
    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return;
    }

    // Check if the email is in a valid format (basic validation)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // For now, just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // You can implement actual login functionality here, e.g., sending the data to a server
    // For now, let's show a success message:
    alert('Login successful!');
});

// Toggling the visibility of the login form
const loginButton = document.querySelector('.cn');
const loginForm = document.querySelector('.form');

// Toggle the login form when the "JOIN US" button is clicked
loginButton.addEventListener('click', function() {
    // Toggle the visibility of the login form
    loginForm.style.display = (loginForm.style.display === 'block' || loginForm.style.display === '') ? 'none' : 'block';
});
