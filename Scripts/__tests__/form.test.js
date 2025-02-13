const $ = require('jquery');
const { init } = require('../crud/form');

describe('Form Validation Tests', () => {
  beforeEach(() => {
    // Set up the DOM
    document.body.innerHTML = `
      <form id="myForm">
        <input type="text" id="name">
        <span id="nameError"></span>

        <input type="email" id="email">
        <span id="emailError"></span>

        <button type="submit" id="submitBtn">Submit</button>
      </form>
      <div id="successMsg"></div>
    `;

    // Initialize the form script
    init();
  });

  test('should show error if name is empty', () => {
    $("#submitBtn").trigger('click');
    expect($("#nameError").text()).toBe("Name is required");
  });

  test('should show error if email is invalid', () => {
    $("#name").val("John Doe");
    $("#email").val("invalidemail");
    // $("#submitBtn").trigger('click');

    $("#myForm").trigger("submit"); // Trigger the form submit event instead of button click
  
    console.log("Email Error:", $("#emailError").text()); // Debugging
  
    expect($("#emailError").text()).toBe("Valid email is required");
  });

  test('should submit form successfully', () => {
    $("#name").val("John Doe");
    $("#email").val("test@example.com");
    $("#submitBtn").trigger('click');
    expect($("#successMsg").text()).toBe("Form submitted successfully!");
  });
});
