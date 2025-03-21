function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});
function openPage(page) {
    window.location.href = page;
}
// Fungsi untuk membuka pop-up otomatis
window.onload = function() {
    document.getElementById("popupModal").style.display = "block";
};

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

// Menutup pop-up jika klik di luar area pop-up
window.onclick = function(event) {
    let modal = document.getElementById("popupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
