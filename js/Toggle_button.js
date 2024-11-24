// Toggle visibility on 'View More' button click
viewMoreButton.addEventListener("click", () => {
    const hiddenVideos = Array.from(videoGallery.children).filter(card => card.style.display === "none");
    if (hiddenVideos.length > 0) {
        hiddenVideos.forEach(card => (card.style.display = "block"));
        viewMoreButton.textContent = "View Less Videos";
    } else {
        Array.from(videoGallery.children).forEach((card, index) => {
            if (index >= maxVisibleVideos) {
                card.style.display = "none";
            }
        });
        viewMoreButton.textContent = "View More Videos";
    }
});
