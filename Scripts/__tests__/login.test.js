/**
 * @jest-environment jsdom
 */

import $ from 'jquery';
import '@testing-library/jest-dom';

describe('Login Form Validation', () => {
    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = `
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

        // Simulating jQuery script
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

    test('Should show error when username is empty', () => {
        $('#loginForm').trigger('submit');

        // Extract raw DOM element from jQuery object
        expect($('#usernameError').get(0)).toBeVisible();
    });

    test('Should show error when password is empty', () => {
        $('#loginForm').trigger('submit');

        // Extract raw DOM element from jQuery object
        expect($('#passwordError').get(0)).toBeVisible();
    });

    test('Should show success message when both fields are filled', () => {
        $('#username').val('testUser');
        $('#password').val('testPass');
        $('#loginForm').trigger('submit');

        expect($('#message').text()).toBe('Login successful!');
        
        // Extract raw DOM element from jQuery object
        expect($('#message').get(0)).toHaveStyle('color: green');
    });
});
