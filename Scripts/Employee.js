$(document).ready(function () {
    $("#loader").show();
    $("#employeeTable").hide();
    setTimeout(function () {
        $("#loader").hide();
        $("#employeeTable").show();
    }, 1500);

    $(document).ajaxStart(function () {
        $("#loader").show();
    });

    $(document).ajaxStop(function () {
        $("#loader").hide();
    });

    $(".edit-btn").click(function () {
        var row = $(this).closest("tr");
        row.find(".view-mode").hide();
        row.find(".edit-mode").show();
        row.find(".edit-btn").hide();
        row.find(".save-btn").show();
        row.find(".delete-btn").hide();
    });

    $(".save-btn").click(function () {
        var row = $(this).closest("tr");
        var employeeId = row.data("employee-id");

        var updatedData = {
            EmployeeId: employeeId,
            EmployeeName: row.find("input").eq(0).val(),
            Designation: row.find("input").eq(1).val(),
            NID: row.find("input").eq(2).val(),
            JoiningDate: row.find("input").eq(3).val(),
            Code: row.find("input").eq(4).val(),
            DepartmentId: row.find("select").eq(0).val(),
            BloodGroup: row.find("select").eq(1).val()
        };

        $.ajax({
            url: '/Employee/Edit',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(updatedData),
            success: function (response) {
                if (response === "Success") {
                    location.reload();
                } else {
                    alert("Failed to update employee details.");
                }
            },
            error: function () {
                alert("Error updating employee details.");
            }
        });
    });
});
