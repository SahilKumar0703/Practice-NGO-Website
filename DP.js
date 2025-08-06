// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('volunteerForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form values
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const email = document.getElementById('email').value;
        const referral = document.getElementById('referral').value;

        // For now, we'll just show a simple alert confirmation
        alert(`Thank you for volunteering, ${name}! We'll get in touch with you shortly.`);

        // Optionally reset the form
        form.reset();
    });
});
