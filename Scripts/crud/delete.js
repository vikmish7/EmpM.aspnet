const $ = require("jquery");

function deleteData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "DELETE",
      success: (response) => resolve(response),
      error: (xhr, status, error) => reject(error),
    });
  });
}

module.exports = { deleteData };
