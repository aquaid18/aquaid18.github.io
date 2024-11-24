document.addEventListener('keydown', function(event) {
    // Menangani kombinasi tombol untuk membuka Developer Tools seperti F12 dan Ctrl+Shift+I
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
        alert("Akses Developer Tools diblokir!");
    }
});
