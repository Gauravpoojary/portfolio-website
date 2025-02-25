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
