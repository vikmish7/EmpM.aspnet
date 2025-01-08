$(document).ready(() => {
    console.log("---------------extrafunc.ts loaded--------------");

    $('input[name="EmployeeName"]').on('input', function () {
        const inputVal = $(this).val() as string;  // Cast to string
        if (inputVal.trim() === '') {
            $(this).css('border', '1px solid red');
        } else {
            $(this).css('border', '1px solid green');
        }
    });
});
