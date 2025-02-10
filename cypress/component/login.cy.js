/// <reference types="cypress" />

describe('Login Form Validation', () => {
    beforeEach(() => {
        // Set up the document body (without running the app)
        cy.document().then((doc) => {
            doc.body.innerHTML = `
                <form id="loginForm">
                    <div>
                        <input type="text" id="username" name="username">
                        <span class="error" id="usernameError" style="display: none;">Username is required</span>
                    </div>
                    <div>
                        <input type="password" id="password" name="password">
                        <span class="error" id="passwordError" style="display: none;">Password is required</span>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p id="message"></p>
            `;

            // Simulating jQuery script inside Cypress
            const $ = Cypress.$;
            $("#loginForm").submit(function (event) {
                event.preventDefault();
                let isValid = true;

                if ($("#username").val().trim() === "") {
                    $("#usernameError").show();
                    isValid = false;
                } else {
                    $("#usernameError").hide();
                }

                if ($("#password").val().trim() === "") {
                    $("#passwordError").show();
                    isValid = false;
                } else {
                    $("#passwordError").hide();
                }

                if (isValid) {
                    $("#message").text("Login successful!").css("color", "green");
                }
            });
        });
    });

    it('Should show error when username is empty', () => {
        cy.get('button[type="submit"]').click();
        cy.get('#usernameError').should('be.visible');
    });

    it('Should show error when password is empty', () => {
        cy.get('button[type="submit"]').click();
        cy.get('#passwordError').should('be.visible');
    });

    it('Should show success message when both fields are filled', () => {
        cy.get('#username').type('testUser');
        cy.get('#password').type('testPass');
        cy.get('button[type="submit"]').click();

        cy.get('#message').should('have.text', 'Login successful!').and('have.css', 'color', 'rgb(0, 128, 0)');
    });
});
