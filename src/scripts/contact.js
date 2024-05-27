document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value;

        // Simple email regex for basic format checking
        const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop the submission since the email is not valid
        }

        if (message.length < 10) {
            alert('Please enter a message at least 10 characters long.');
            return; // Stop the submission since the message is too short
        }

        // Show a success message using ToastX
        $.toastx('Your message has been successfully sent. We will get back to you soon!');

        // Optionally clear the form
        this.reset();
    });
});
