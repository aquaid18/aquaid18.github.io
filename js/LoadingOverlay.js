// Loading overlay functionality
window.addEventListener("load", () => {
    const loadingOverlay = document.getElementById("loadingOverlay");

    // Hilangkan overlay jika halaman sudah selesai dimuat
    const hideOverlay = () => {
        loadingOverlay.style.opacity = "0"; // Fade-out effect
        setTimeout(() => {
            loadingOverlay.style.display = "none"; // Remove overlay after fade-out
        }, 500); // Waktu fade-out (0.5 detik)
    };

    // Tetapkan batas waktu maksimum (10 detik)
    setTimeout(() => {
        hideOverlay();
    }, 6000000); // 10 detik

    // Jika halaman selesai dimuat lebih cepat dari 10 detik
    hideOverlay();
});
