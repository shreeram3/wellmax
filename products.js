document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".product-card");
        card.classList.toggle("active");

        button.textContent =
            card.classList.contains("active") ? "Read Less" : "Read More";
    });
});
