document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Website Loaded");

    // Navbar Animation
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const cards = document.querySelectorAll(".card");

    // Check if dark mode is already enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
        cards.forEach(card => card.classList.add("dark-mode"));
        toggleButton.textContent = "☀️ Light Mode";
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        navbar.classList.toggle("dark-mode");
        cards.forEach(card => card.classList.toggle("dark-mode"));

        // Save dark mode preference in local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Dark Mode";
        }
    });
});
