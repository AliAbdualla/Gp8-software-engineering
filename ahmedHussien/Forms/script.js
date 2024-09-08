// Initialize EmailJS
emailjs.init("hand2land@gmail.com"); // Replace with your EmailJS User ID

document.getElementById('college-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email
    emailjs.send("your_service_id", "your_template_id", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(response => {
        document.getElementById('response-message').textContent = 'Message sent successfully!';
        document.getElementById('college-form').reset();
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'Failed to send message.';
        console.error('EmailJS Error:', error);
    });
});
