// Toggle Menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
