document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert with the form data
    alert(`Thank you, ${name}! We have received your message and will get back to you at ${email} soon.\n\nMessage:\n${message}`);

    // Optionally, you can clear the form
    event.target.reset();
});
