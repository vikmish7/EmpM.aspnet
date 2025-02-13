const $ = require('jquery');
const { init } = require('../basjquerymodified'); // Import init function


describe('Basic jQuery Unit Test', () => {
  let htmlContent;

  beforeEach(() => {
    // Simulate the HTML structure
    htmlContent = `
      <button id="changeTextBtn">Change Text</button>
      <div id="displayText">Original Text</div>
    `;

    document.body.innerHTML = htmlContent; // Inject HTML into jsdom

    // ✅ Manually call init() since document.ready() won't trigger in Jest
    init();
    // $(document).triggerHandler('ready');

  });

  it('should change text on button click', () => {
    expect($('#displayText').text()).toBe('Original Text');

    // Simulate click event
    $('#changeTextBtn').trigger('click');

    // ✅ Verify the text changed
    expect($('#displayText').text()).toBe('Text changed!');
  });
});
