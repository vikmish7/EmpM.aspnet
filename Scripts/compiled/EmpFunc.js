"use strict";
$(document).ready(function () {
    console.log("---------------extrafunc.ts loaded--------------");
    // $('input[name="EmployeeName"]').on('input', function () {
    //     var inputVal = $(this).val(); // Cast to string
    //     if (inputVal.trim() === '') {
    //         $(this).css('border', '1px solid red');
    //     }
    //     else {
    //         $(this).css('border', '1px solid green');
    //     }
    // });
    // $('input[name="EmployeeName"]').on('blur', function () {
    //     if ($(this).val().trim() === '') {
    //         $(this).css('border', '2px solid red');
    //         $(this).siblings('label').append('<span class="required">*</span>');  // Add * to label
    //     } else {
    //         $(this).css('border', '1px solid green');
    //         $(this).siblings('label').find('.required').remove();  // Remove * from label
    //     }
    // });

    const validateInput = (input) => {
        const value = input.val()?.trim();
        if (!value) {
            input.css('border', '1px solid red');
        } else {
            input.css('border', '1px solid green');
        }
    };

    // On input: Validate whenever the value changes
    $('input[name="EmployeeName"]').on('input', function () {
        validateInput($(this));
    });

    // On blur: Validate when the user leaves the input field
    $('input[name="EmployeeName"]').on('blur', function () {
        validateInput($(this));
    });

    // On focus: Reset the border (optional)
    $('input[name="EmployeeName"]').on('focus', function () {
        $(this).css('border', '1px solid #ccc'); // Reset to default border color
    });
    // $('input[name="EmployeeEmail"]').on('input', function () {
    //     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     if (!emailRegex.test($(this).val())) {
    //         $(this).css('border', '1px solid red');
    //     } else {
    //         $(this).css('border', '1px solid green');
    //     }
    // });
});
//# sourceMappingURL=EmpFunc.js.map