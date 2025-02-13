const $ = require("jquery");

function postData(url, data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: (response) => resolve(response),
      error: (xhr, status, error) => reject(error),
    });
  });
}

module.exports = { postData };
