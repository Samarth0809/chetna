document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const name = event.target.querySelector('input[type="text"]').value;
        const email = event.target.querySelector('input[type="email"]').value;

        // Display a success message (you can customize this as needed)
        alert(`Thank you, ${name}! You have successfully subscribed with ${email}.`);

        // Optionally, you can clear the form
        event.target.reset();
    });

    // Toggle menu on mobile view
    document.getElementById('menu-btn').addEventListener('click', function () {
        const navMenu = document.getElementById('nav-menu');
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
});