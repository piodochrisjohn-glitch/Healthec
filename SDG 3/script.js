// Smooth scrolling for nav links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Learn More button action
const learnMoreBtn = document.querySelector(".action .btn");

learnMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Thank you for your interest! Let’s work together for better health and well-being if you want more infomation search a health well-being or SDG 3");
});

// Simple scroll animation for goal cards
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (cardTop < screenPosition) {
            card.classList.add("show");
        }
    });
});