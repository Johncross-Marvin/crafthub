document.getElementById('buyerSignupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    window.location.href = 'buyer-dashboard.html'; // Redirect to the Buyer Dashboard
});
