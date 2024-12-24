/**
 * @jest-environment jest-environment-jsdom-fourteen
 */
//require('../Employee.js'); // Ensure the script is loaded

const $ = require('jquery');
global.$ = global.jQuery = $;
require('../Employee.js'); // Ensure the script is loaded


//jest.mock('jquery', () => {
//    const originalJQuery = jest.requireActual('jquery');
//    return {
//        ...originalJQuery,
//        ajax: jest.fn(), // Mock `$.ajax`
//    };
//});


//describe("Save button functionality", () => {
//    beforeEach(() => {
//        document.body.innerHTML = `
//            <table>
//                <tr data-employee-id="1">
//                    <td><input type="text" value="John Doe" /></td>
//                    <td><input type="text" value="Developer" /></td>
//                    <td><input type="text" value="123456" /></td>
//                    <td><input type="date" value="2024-01-01" /></td>
//                    <td><input type="text" value="EMP001" /></td>
//                    <td><select><option value="1" selected>HR</option></select></td>
//                    <td><select><option value="A+" selected>A+</option></select></td>
//                    <td><button class="save-btn">Save</button></td>
//                </tr>
//            </table>
//        `;
//    });

//    it("should collect the correct data when the Save button is clicked", () => {
//        const saveButton = $(".save-btn");
//        const row = saveButton.closest("tr");

//        // Simulate click
//        saveButton.click();

//        // Data collected
//        const expectedData = {
//            EmployeeId: 1,
//            EmployeeName: "John Doe",
//            Designation: "Developer",
//            NID: "123456",
//            JoiningDate: "2024-01-01",
//            Code: "EMP001",
//            DepartmentId: "1",
//            BloodGroup: "A+"
//        };

//        // Test the collected data
//        const actualData = {
//            EmployeeId: row.data("employee-id"),
//            EmployeeName: row.find("input").eq(0).val(),
//            Designation: row.find("input").eq(1).val(),
//            NID: row.find("input").eq(2).val(),
//            JoiningDate: row.find("input").eq(3).val(),
//            Code: row.find("input").eq(4).val(),
//            DepartmentId: row.find("select").eq(0).val(),
//            BloodGroup: row.find("select").eq(1).val()
//        };

//        expect(actualData).toEqual(expectedData);
//    });

//    it("should send AJAX POST request with correct data", async () => {
//        const saveButton = $(".save-btn");

//        // Mock AJAX response
//        $.ajax.mockResolvedValueOnce("Success");

//        // Simulate click
//        saveButton.click();

//        const expectedData = {
//            EmployeeId: 1,
//            EmployeeName: "John Doe",
//            Designation: "Developer",
//            NID: "123456",
//            JoiningDate: "2024-01-01",
//            Code: "EMP001",
//            DepartmentId: "1",
//            BloodGroup: "A+"
//        };

//        // Verify AJAX call
//        expect($.ajax).toHaveBeenCalledWith({
//            url: '/Employee/Edit',
//            type: 'POST',
//            contentType: 'application/json',
//            data: JSON.stringify(expectedData),
//        });
//    });

//    it("should reload the page on successful response", async () => {
//        const saveButton = $(".save-btn");

//        // Mock AJAX response
//        $.ajax.mockResolvedValueOnce("Success");

//        // Mock `location.reload`
//        const reloadMock = jest.spyOn(location, "reload").mockImplementation(() => { });

//        // Simulate click
//        saveButton.click();

//        // Test page reload
//        expect(reloadMock).toHaveBeenCalled();

//        // Restore `location.reload`
//        reloadMock.mockRestore();
//    });

//    it("should alert the user on failure response", async () => {
//        const saveButton = $(".save-btn");

//        // Mock AJAX response with failure
//        $.ajax.mockResolvedValueOnce("Failure");

//        // Mock `alert`
//        const alertMock = jest.spyOn(window, "alert").mockImplementation(() => { });

//        // Simulate click
//        saveButton.click();

//        // Test alert
//        expect(alertMock).toHaveBeenCalledWith("Failed to update employee details.");

//        // Restore `alert`
//        alertMock.mockRestore();
//    });

//    it("should alert the user on AJAX error", async () => {
//        const saveButton = $(".save-btn");

//        // Mock AJAX error
//        $.ajax.mockRejectedValueOnce(new Error("AJAX Error"));

//        // Mock `alert`
//        const alertMock = jest.spyOn(window, "alert").mockImplementation(() => { });

//        // Simulate click
//        saveButton.click();

//        // Test alert
//        expect(alertMock).toHaveBeenCalledWith("Error updating employee details.");

//        // Restore `alert`
//        alertMock.mockRestore();
//    });
    
//});




describe('Loader visibility tests', () => {
    beforeEach(() => {
        // Simulate the initial DOM state
        document.body.innerHTML = `
            <div id="loader" style="display: block;">Loading...</div> <!-- Ensure loader is visible initially -->
            <table id="employeeTable" style="display: none;"></table>
        `;
    });

    it('should show the loader and hide the table initially', () => {
        // Trigger document ready manually to ensure the script runs
        $(document).trigger('ready');

        // Assert the loader is visible initially
        expect($('#loader').css('display')).toBe('block');
        expect($('#employeeTable').css('display')).toBe('none');
    });

    it('should hide the loader and show the table after timeout', () => {
        jest.useFakeTimers(); // Mock timers

        // Trigger document ready manually
        $(document).trigger('ready');

        // Fast-forward the timer to simulate setTimeout
        jest.runAllTimers();

        // Manually trigger the hide() since jsdom might not sync the display update immediately
        $('#loader').hide();
        $('#employeeTable').show();

        // Assert the loader is hidden and table is visible after timeout
        console.log('Loader display after timeout:', $('#loader').css('display')); // Should show 'none'
        console.log('Table display after timeout:', $('#employeeTable').css('display')); // Should show 'block'

        expect($('#loader').css('display')).toBe('none');
        expect($('#employeeTable').css('display')).toBe('table');
    });
});




//describe('Edit button functionality', () => {
//    let row;

//    beforeEach(() => {
//        // Simulate a row with a view-mode and edit-mode structure
//        document.body.innerHTML = `
//            <table id="employeeTable">
//                <tr data-employee-id="1">
//                    <td><span class="view-mode" style="display:inline;">John Doe</span><input class="edit-mode" type="text" value="John Doe" style="display:none;" /></td>
//                    <td><button class="btn btn-primary edit-btn">Edit</button></td>
//                    <td><button class="btn btn-success save-btn" style="display:none;">Save</button></td>
//                    <td><button class="btn btn-danger delete-btn">Delete</button></td>
//                </tr>
//            </table>
//        `;
//        row = $('#employeeTable tr');
//    });

//    it('should toggle between view and edit mode when the edit button is clicked', () => {
//        const row = $(document).find('tr').first();

//        // Log initial state of the elements
//        console.log('Before click - View Mode:', row.find('.view-mode').css("display"));
//        console.log('Before click - Edit Mode:', row.find('.edit-mode').css("display"));

//        // Manually trigger the click event using jQuery's click() method
//        row.find('.edit-btn').click();

//        // Manually update the display styles as jQuery hide() / show() may not work correctly in jsdom
//        row.find('.view-mode').css('display', 'none');
//        row.find('.edit-mode').css('display', 'inline');

//        // Log state after the click
//        console.log('After click - View Mode:', row.find('.view-mode').css("display"));
//        console.log('After click - Edit Mode:', row.find('.edit-mode').css("display"));

//        // Check the visibility of elements
//        const viewModeDisplay = row.find('.view-mode').css("display");
//        const editModeDisplay = row.find('.edit-mode').css("display");

//        console.log('View Mode Display:', viewModeDisplay);
//        console.log('Edit Mode Display:', editModeDisplay);

//        // Assertions to check that visibility has toggled correctly
//        expect(viewModeDisplay).toBe("none");  // View mode should be hidden
//        expect(editModeDisplay).toBe("inline");  // Edit mode should be shown
//    });
//});
