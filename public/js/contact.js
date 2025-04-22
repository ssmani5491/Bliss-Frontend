function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Form not found. Check the form ID.");
    return;
  }

  // Optional: Validate phone number format
  const phone = form.querySelector("#phone");
  const phoneRegex = /^[0-9]{10}$/; // Change to match your phone format
  if (!phoneRegex.test(phone.value)) {
    alert("Please enter a valid phone number.");
    return;
  }

  const formData = new FormData(form); // Create FormData object
  const jsonData = Object.fromEntries(formData); // Convert form data to JSON

  fetch("http://127.0.0.1:3000/contactus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || "Your message has been sent successfully!");
      form.reset(); // Reset the form on successful submission
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        error.message || "Failed to submit the form. Please try again later."
      );
    });
}
