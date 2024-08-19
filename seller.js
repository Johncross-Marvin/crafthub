document.getElementById('seller-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form data can be validated here and sent to the server

    // Redirect to Seller Dashboard
    window.location.href = 'seller-dashboard.html';
});
