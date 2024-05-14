
document.addEventListener('DOMContentLoaded', function() {
    // - attach event listener to the form submission
    document.getElementById('customerForm').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Retrieve form inputs
        const name = document.getElementById('name').value.trim(); 
        const email = document.getElementById('email').value.trim(); 
        const phone = document.getElementById('phone').value.trim(); 
        const address = document.getElementById('address').value.trim(); 
        const type = document.getElementById('type').value;

        // Basic Validation
        let errors = []; 
        if (!name) {
            errors.push("Name is required.");
        }
        if (!email) {
            errors.push("Email is required.");
        } else if (!validatedEmail(email)) {
            errors.push("Email is invalid");
        }
        if (errors.length > 0) {
            alert("Errors:\n" + errors.join("\n"));
            return;
        }

        // If validation passes, append the customer data to the output div
        const customerDataDiv = document.getElementById('customer-data');
        const customerInfo = document.createElement('div');
        customerInfo.classList.add('customer-info');
        customerInfo.innerHTML = `<strong>Name:</strong> ${name}<br>
                                  <strong>Email:</strong> ${email}<br>
                                  <strong>Phone:</strong> ${phone}<br>
                                  <strong>Address:</strong> ${address}<br>
                                  <strong>Type:</strong> ${type}`;
        customerDataDiv.appendChild(customerInfo);

        // Optionally clear the form or notify the user of success
        alert("Customer registered successfully!");
        document.getElementById('customerForm').reset(); 
    });
})

// Function to validate email using a regular expression
function validatedEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); 
}


