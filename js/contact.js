// Get the form element
const contactForm = document.getElementById('contactForm');

// Listen for form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Collect form data
  const formData = new FormData(contactForm);
  
  // Convert form data to JSON format
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  
  // Fetch API call to submit form data
  fetch('https://class-contact-form.onrender.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Display success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.innerHTML = '<p>Message sent successfully!</p>';
    responseMessage.style.color = 'green';
    
    // Clear form fields
    contactForm.reset();
  })
  .catch(error => {
    // Display error message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.innerHTML = `<p>There was an error sending your message: ${error.message}</p>`;
    responseMessage.style.color = 'red';
  });
});
