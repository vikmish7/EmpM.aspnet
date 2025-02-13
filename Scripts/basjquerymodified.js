const $ = require('jquery');

function init() {
    console.log("---loaded------------");
    $("#changeTextBtn").click(function () {
      $("#displayText").text("Text changed!");
    });
}

// Run immediately if in browser
$(document).ready(init);

// Export for Jest testing
module.exports = { init };
