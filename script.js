// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessages = [];

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
            errorMessages.push("Name is required.");
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "") {
            isValid = false;
            errorMessages.push("Email is required.");
        } else if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            errorMessages.push("Enter a valid email address.");
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            isValid = false;
            errorMessages.push("Message cannot be empty.");
        }

        // If not valid, prevent form submission
        if (!isValid) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        } else {
            // Optional: confirmation before submit
            alert("Your message has been submitted successfully!");
        }
    });
});
