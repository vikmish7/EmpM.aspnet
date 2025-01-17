$(document).ready(() => {
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
    
    const validateInput = (
        input: JQuery<HTMLElement>,
        type: 'text' | 'alpha' | 'numeric' | 'date' | 'optional' | 'select' | 'kendo-select'
    ): boolean => {
        let isValid = false;
        switch (type) {
            case 'text': // Generic non-empty check
                isValid = !!input.val()?.toString().trim();
                break;
            case 'alpha': // Only alphabets
                isValid = /^[A-Za-z\s]+$/.test(input.val()?.toString() ?? '');
                break;
            case 'numeric': // Only numbers
                isValid = /^[0-9]+$/.test(input.val()?.toString() ?? '');
                break;
            case 'date': // Validate if a date is selected and in the format YYYY-MM-DD
                isValid = !!input.val() && /^\d{4}-\d{2}-\d{2}$/.test(input.val()?.toString() ?? '');
                break;
            case 'select': // Validate standard dropdowns
                isValid = input.val() !== '0';
                break;
                case 'kendo-select': // Validate Kendo DropDownList
                const dropdownlist = input.data('kendoDropDownList');
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
        validateInput($(this), 'text');
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
    $('form').on('submit', function (e: JQuery.TriggeredEvent) {
        const isEmployeeNameValid = validateInput($('input[name="EmployeeName"]'), 'text');
        const isDesignationValid = validateInput($('input[name="Designation"]'), 'alpha');
        const isNIDValid = validateInput($('input[name="NID"]'), 'numeric');
        const isJoiningDateValid = validateInput($('input[name="JoiningDate"]'), 'date');
        const isDepartmentIdValid = validateInput($('#DepartmentId'), 'kendo-select');
        const isBloodGroupValid = validateInput($('#BloodGroup'), 'kendo-select');

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
