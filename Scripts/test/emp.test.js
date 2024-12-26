// require(['jquery'], function($) {
//     // Ensure that the describe block is inside the function callback
//     describe("Addition", function() {
//         it("should add two numbers correctly", function() {
//             console.log("Test running...");
//             var result = 2 + 3;
//             expect(result).toBe(5);  // Correct the expected value
//         });
    
//         it("should add two numbers correctly again", function() {
//             console.log("Test running...");
//             var result = 2 + 3;
//             expect(result).toBe(5);  // Correct the expected value
//         });
//     });
// });

require(['jquery'], function($) {
    // Define test suite
    describe("Basic Tests", function() {
        it("should correctly add two numbers", function() {
            var result = 2 + 3;
            expect(result).toBe(5);
        });
    });
});
// describe("Addition", function() {
//     it("should add two numbers correctly", function() {
//         console.log("Test running...");
//         var result = 2 + 3;
//         expect(result).toBe(2);  // Correct the expected value
//     });

//     it("should add two numbers correctly again", function() {
//         console.log("Test running...");
//         var result = 2 + 3;
//         expect(result).toBe(5);  // Correct the expected value
//     });
// });
    // Ensure Jasmine is initialized and jQuery is available
    // describe('Loader visibility tests', function() {
    //     beforeEach(function() {
    //         // Simulate the initial DOM state
    //         document.body.innerHTML = `
    //             <div id="loader" style="display: block;">Loading...</div> <!-- Ensure loader is visible initially -->
    //             <table id="employeeTable" style="display: none;"></table>
    //         `;
    //     });

    //     // Use Jasmine fake timers
    //     beforeAll(function() {
    //         // jasmine.clock().install();  // Install fake timers for all tests
    //     });

    //     afterAll(function() {
    //         // jasmine.clock().uninstall();  // Uninstall fake timers after all tests
    //     });

    //     it('should show the loader and hide the table initially', function() {
    //         // Trigger document ready manually
    //         $(document).trigger('ready');

    //         // Assert the loader is visible initially
    //         expect($('#loader').css('display')).toBe('block');
    //         expect($('#employeeTable').css('display')).toBe('none');
    //     });

    //     it('should hide the loader and show the table after timeout', function() {
    //         // jasmine.clock().tick(1000); // Fast-forward the timer by 1 second

    //         // Manually trigger the hide() since jsdom might not sync the display update immediately
    //         $('#loader').hide();
    //         $('#employeeTable').show();

    //         // Assert the loader is hidden and table is visible after timeout
    //         expect($('#loader').css('display')).toBe('none');
    //         expect($('#employeeTable').css('display')).toBe('table');
    //     });
    // });
// });
