"use strict";
$(document).ready(function () {
    console.log("---------------extrafunc.ts loaded and msbuild re check--------------");
    // const validateInput = (input: JQuery<HTMLElement>): boolean => {
    //     const value = input.val();
    //     if (typeof value === 'string') {
    //         const trimmedValue = value.trim();
    //         if (!trimmedValue) {
    //             input.css('border', '1px solid red');
    //             return false; // Invalid input
    //         } else {
    //             input.css('border', '1px solid green');
    //             return true; // Valid input
    //         }
    //     } else {
    //         input.css('border', '1px solid red');
    //         return false; // Invalid input
    //     }
    // };
    // // On input: Validate whenever the value changes
    // $('input[name="EmployeeName"]').on('input', function () {
    //     validateInput($(this));
    // });
    // // On blur: Validate when the user leaves the input field
    // $('input[name="EmployeeName"]').on('blur', function () {
    //     validateInput($(this));
    // });
    // // On focus: Reset the border (optional)
    // $('input[name="EmployeeName"]').on('focus', function () {
    //     $(this).css('border', '1px solid #ccc'); // Reset to default border color
    // });
    // $('form').on('submit', function (e: JQuery.TriggeredEvent) {
    //     const isEmployeeNameValid = validateInput($('input[name="EmployeeName"]'));
    //     if (!isEmployeeNameValid) {
    //         e.preventDefault(); // Prevent form submission
    //         alert('Please fill out the Employee Name field.');
    //     }
    // });
    // const validateInput = (input: JQuery<HTMLElement>, type: 'text' | 'alpha' | 'numeric'): boolean => {
    //     const value = input.val();
    //     if (typeof value === 'string') {
    //         const trimmedValue = value.trim();
    //         let isValid = false;
    //         switch (type) {
    //             case 'text': // Generic non-empty check
    //                 isValid = !!trimmedValue;
    //                 break;
    //             case 'alpha': // Only alphabets
    //                 isValid = /^[A-Za-z\s]+$/.test(trimmedValue);
    //                 break;
    //             case 'numeric': // Only numbers
    //                 isValid = /^[0-9]+$/.test(trimmedValue);
    //                 break;
    //         }
    //         input.css('border', isValid ? '1px solid green' : '1px solid red');
    //         return isValid;
    //     }
    //     input.css('border', '1px solid red');
    //     return false;
    // };
    // // Bind validation events for EmployeeName
    // $('input[name="EmployeeName"]').on('input blur', function () {
    //     validateInput($(this), 'text');
    // }).on('focus', function () {
    //     $(this).css('border', '1px solid #ccc'); // Reset to default
    // });
    // // Bind validation events for Designation (alphabets only)
    // $('input[name="Designation"]').on('input blur', function () {
    //     validateInput($(this), 'text');
    // }).on('focus', function () {
    //     $(this).css('border', '1px solid #ccc'); // Reset to default
    // });
    // // Bind validation events for NID (numeric only)
    // $('input[name="NID"]').on('input blur', function () {
    //     validateInput($(this), 'numeric');
    // }).on('focus', function () {
    //     $(this).css('border', '1px solid #ccc'); // Reset to default
    // });
    // // On form submission
    // $('form').on('submit', function (e: JQuery.TriggeredEvent) {
    //     const isEmployeeNameValid = validateInput($('input[name="EmployeeName"]'), 'text');
    //     const isDesignationValid = validateInput($('input[name="Designation"]'), 'alpha');
    //     const isNIDValid = validateInput($('input[name="NID"]'), 'numeric');
    //     if (!isEmployeeNameValid || !isDesignationValid || !isNIDValid) {
    //         e.preventDefault(); // Prevent form submission
    //         alert('Please fill out all required fields correctly.');
    //     }
    // });
    var validateInput = function (input, type) {
        var _a, _b, _c, _d, _e, _f, _g;
        var isValid = false;
        switch (type) {
            case 'text': // Generic non-empty check
                isValid = !!((_a = input.val()) === null || _a === void 0 ? void 0 : _a.toString().trim());
                break;
            case 'alpha': // Only alphabets
                isValid = /^[A-Za-z\s]+$/.test((_c = (_b = input.val()) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : '');
                break;
            case 'numeric': // Only numbers
                isValid = /^[0-9]+$/.test((_e = (_d = input.val()) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : '');
                break;
            case 'date': // Validate if a date is selected and in the format YYYY-MM-DD
                isValid = !!input.val() && /^\d{4}-\d{2}-\d{2}$/.test((_g = (_f = input.val()) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : '');
                break;
            case 'select': // Validate standard dropdowns
                isValid = input.val() !== '0';
                break;
            case 'kendo-select': // Validate Kendo DropDownList
                var dropdownlist = input.data('kendoDropDownList');
                isValid = dropdownlist ? dropdownlist.value() !== '' && dropdownlist.value() !== '0' : false;
                break;
            case 'optional': // Optional field (always valid)
                isValid = true;
                break;
        }
        input.closest('.form-group').css('border', isValid ? '1px solid green' : '1px solid red');
        return isValid;
    };
    // Validation bindings for other fields (as before)
    $('input[name="EmployeeName"]').on('input blur', function () {
        validateInput($(this), 'text');
    });
    $('input[name="Designation"]').on('input blur', function () {
        validateInput($(this), 'alpha');
    });
    $('input[name="NID"]').on('input blur', function () {
        validateInput($(this), 'numeric');
    });
    $('input[name="JoiningDate"]').on('input blur', function () {
        validateInput($(this), 'date');
    });
    // Kendo DropDownList validation
    $('#BloodGroup').on('change blur', function () {
        validateInput($(this), 'kendo-select');
    });
    $('#DepartmentId').on('change blur', function () {
        validateInput($(this), 'kendo-select');
    });
    // On form submission
    $('form').on('submit', function (e) {
        var isEmployeeNameValid = validateInput($('input[name="EmployeeName"]'), 'text');
        var isDesignationValid = validateInput($('input[name="Designation"]'), 'alpha');
        var isNIDValid = validateInput($('input[name="NID"]'), 'numeric');
        var isJoiningDateValid = validateInput($('input[name="JoiningDate"]'), 'date');
        var isDepartmentIdValid = validateInput($('#DepartmentId'), 'kendo-select');
        var isBloodGroupValid = validateInput($('#BloodGroup'), 'kendo-select');
        if (!isEmployeeNameValid || !isDesignationValid || !isNIDValid || !isJoiningDateValid || !isDepartmentIdValid || !isBloodGroupValid) {
            e.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields correctly.');
        }
        // if (!isEmployeeNameValid || !isDesignationValid || !isNIDValid || !isJoiningDateValid ) {
        //     e.preventDefault(); // Prevent form submission
        //     alert('Please fill out all required fields correctly.');
        // }
    });
});
//# sourceMappingURL=validation.js.map