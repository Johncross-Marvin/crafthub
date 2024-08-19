// script.js

// Example of smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset for fixed header
            behavior: 'smooth'
        });
    });
});

// Example of form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
    form.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners or general JavaScript code here
});

function redirectToLogin() {
    window.location.href = 'http://172.22.192.1:5500/login.html'; // Replace with your actual login page URL
}


const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlidePosition();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
});
