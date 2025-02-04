const $ = require('jquery');  // Import jQuery

describe('Basic jQuery Unit Test', () => {
  let htmlContent;

  beforeEach(() => {
    // Simulate the HTML content in jsdom (similar to loading index.html in Cypress)
    htmlContent = `
      <button id="changeTextBtn">Change Text</button>
      <div id="displayText">Original Text</div>
    `;

    document.body.innerHTML = htmlContent;  // Set HTML content to the body
  });

  it('should change text on button click', () => {
    // Ensure the text is "Original Text" before the click
    const displayText = $('#displayText');
    expect(displayText.text()).toBe('Original Text');

    // Simulate the button click and modify the text in the callback function
    $('#changeTextBtn').click(function () {
      $('#displayText').text('Text changed!');
    });

    // Manually trigger the click event
    $('#changeTextBtn').trigger('click');  // Trigger the click event in jsdom

    // After clicking the button, check if the text changed
    expect(displayText.text()).toBe('Text changed!');
  });
});
