// cypress/component/app.spec.cy.js

describe('jQuery Toggle Class Test', () => {
    it('should toggle the class "active" on #toggle-div when #toggle-button is clicked', () => {
      // Inject HTML into the page dynamically
      cy.document().then((doc) => {
        doc.body.innerHTML = `
          <button id="toggle-button">Toggle</button>
          <div id="toggle-div">This is a div</div>
        `;
      });
  
      // Now load the jQuery file
      cy.window().then((win) => {
        const jqueryScript = win.document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';  // Load jQuery from CDN
        win.document.body.appendChild(jqueryScript);
  
        const script = win.document.createElement('script');
        script.src = 'fixtures/basjquery.js';  // Path to your jQuery file
        script.onload = () => {
            // This ensures that the script is loaded before proceeding with the test
            cy.get('#toggle-button').should('be.visible'); // Ensure the button is visible
            cy.get('#toggle-div').should('not.have.class', 'active'); // Initial state
          };
        win.document.body.appendChild(script);
      });
      cy.wait(500);  // Ensure the scripts are fully loaded and applied

  
      // Wait for the jQuery script to load and execute
      cy.get('#toggle-button').should('be.visible');
  
      // Check that the div does not have the "active" class initially
      cy.get('#toggle-div').should('not.have.class', 'active');
  
      cy.window().then((win) => {
        expect(win.$).to.exist;  // Ensure jQuery is available
      });
      // Click the button to toggle the class
      cy.get('#toggle-button').click();
  
      // Verify that the class "active" was added to the div
      cy.get('#toggle-div').should('have.class', 'active');
  
      // Click again to toggle it off
      cy.get('#toggle-button').click();
  
      // Verify that the class "active" was removed from the div
      cy.get('#toggle-div').should('not.have.class', 'active');
    });
  });
  
  // cypress/component/app.spec.cy.js

// describe('jQuery Toggle Class Test', () => {
//     it('should toggle the class "active" on #toggle-div when #toggle-button is clicked', () => {
//       // Inject HTML into the page dynamically
//       cy.document().then((doc) => {
//         console.log('Injecting HTML...');
//         doc.body.innerHTML = `
//           <button id="toggle-button">Toggle</button>
//           <div id="toggle-div">This is a div</div>
//         `;
//         console.log('HTML injected successfully.');
//       });
  
//       // Load jQuery library dynamically
//       cy.window().then((win) => {
//         console.log('Creating script tag for jQuery...');
//         const jqueryScript = win.document.createElement('script');
//         jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';  // Load jQuery from CDN
//         win.document.body.appendChild(jqueryScript);
  
//         // Wait for jQuery to load
//         jqueryScript.onload = () => {
//           console.log('jQuery loaded successfully.');
  
//           // Check if jQuery is available
//           expect(win.$).to.exist;  // Ensure jQuery is loaded
//           console.log('jQuery is available.');
  
//           // After jQuery is loaded, load app.js
//           console.log('Creating script tag for app.js...');
//           const script = win.document.createElement('script');
//           script.src = 'Scripts/basicjquery.js';  // Path to your jQuery-based script
//           script.onload = () => {
//             console.log('app.js loaded successfully.');
  
//             // Wait to make sure app.js is applied
//             cy.wait(500);  // Small wait to ensure app.js is applied properly
//             console.log('Waiting for 500ms after app.js load.');
  
//             // Now interact with the button
//             console.log('Clicking the #toggle-button...');
//             cy.get('#toggle-button').should('be.visible').click();
//             console.log('Button clicked.');
  
//             // Verify that the class "active" was added to the div
//             cy.get('#toggle-div').should('have.class', 'active');
//             console.log('Verified that class "active" is added.');
  
//             // Click again to toggle it off
//             console.log('Clicking the #toggle-button again to toggle off...');
//             cy.get('#toggle-button').click();
//             console.log('Button clicked again.');
  
//             // Verify that the class "active" was removed from the div
//             cy.get('#toggle-div').should('not.have.class', 'active');
//             console.log('Verified that class "active" is removed.');
//           };
//           win.document.body.appendChild(script);
//         };
//       });
  
//       // Wait for jQuery and app.js to load
//       cy.wait(500);  // Ensure the scripts are fully loaded and applied
//       console.log('Waiting for scripts to load...');
//     });
//   });
  