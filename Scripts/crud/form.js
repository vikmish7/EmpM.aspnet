const $ = require('jquery');

function init() {
  $("#myForm").submit(function (event) {
    event.preventDefault(); // Prevent actual form submission

    let isValid = true;
    let email = $("#email").val().trim();
    let name = $("#name").val().trim();

    if (!name) {
      isValid = false;
      $("#nameError").text("Name is required");
    } else {
      $("#nameError").text("");
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      isValid = false;
      $("#emailError").text("Valid email is required");
    } else {
      $("#emailError").text("");
    }

    if (isValid) {
      $("#successMsg").text("Form submitted successfully!");
    } else {
      $("#successMsg").text("");
    }
  });
}

// Run in browser
$(document).ready(init);

// Export for testing
module.exports = { init };
