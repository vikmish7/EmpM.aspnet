const $ = require("jquery");

function showLoaderThenMessage() {
  $("#content").html('<div id="loader">Loading...</div>'); // Show loader
  
  setTimeout(() => {
    $("#loader").remove(); // Remove loader
    $("#content").html("<h1>Hello Jest!</h1>"); // Display message
  }, 2000);
}

module.exports = { showLoaderThenMessage };
