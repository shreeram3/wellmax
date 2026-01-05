// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Contact Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    form.reset();
});


const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});


document.querySelectorAll(".has-mega > a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("open");
        }
    });
});

