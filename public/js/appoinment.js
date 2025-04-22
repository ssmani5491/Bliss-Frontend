// (function ($) {
//     'use strict';

//     var form = $('.contact__form'),
//         message = $('.contact__msg'),
//         form_data;

//     // Success function
//     function done_func(response) {
//         message.fadeIn().removeClass('alert-danger').addClass('alert-success');
//         message.text(response);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//         form.find('input:not([type="submit"]), textarea').val('');
//     }

//     // fail function
//     function fail_func(data) {
//         message.fadeIn().removeClass('alert-success').addClass('alert-success');
//         message.text(data.responseText);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//     }
    
//     form.submit(function (e) {
//         e.preventDefault();
//         form_data = $(this).serialize();
//         $.ajax({
//             type: 'POST',
//             url: form.attr('action'),
//             data: form_data
//         })
//         .done(done_func)
//         .fail(fail_func);
//     });
    
// })(jQuery);

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Correct the form ID
  const form = document.getElementById("appoinmentForm");

  if (!form) {
    console.error("Form not found. Check the form ID.");
    return;
  }

  const formData = new FormData(form); // Create FormData object
  const jsonData = Object.fromEntries(formData); // Convert form data to JSON

  // Update the backend endpoint
  fetch("http://127.0.0.1:3000/submit-form", {
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
      alert(
        data.message || "Your appointment has been submitted successfully!"
      );
      form.reset(); // Reset the form on successful submission
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        error.message || "Failed to submit the form. Please try again later."
      );
    });
}

