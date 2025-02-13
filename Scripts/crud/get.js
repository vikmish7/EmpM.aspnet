const $ = require("jquery");

function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "GET",
      success: (response) => resolve(response),
      error: (xhr, status, error) => reject(error),
    });
  });
}

module.exports = { getData };
