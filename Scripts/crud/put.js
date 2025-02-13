const $ = require("jquery");

function updateData(url, data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "PUT",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: (response) => resolve(response),
      error: (xhr, status, error) => reject(error),
    });
  });
}

module.exports = { updateData };
