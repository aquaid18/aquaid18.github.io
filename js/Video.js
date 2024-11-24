// Video Gallery functionality
const videoGallery = document.getElementById("videoGallery");
const viewMoreButton = document.getElementById("viewMoreButton");
const initialVisibleCount = 12;  // Show only 12 videos initially
// Generate video cards
const maxVisibleVideos = 12;

videoSources.forEach((src, index) => {
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    videoCard.innerHTML = `<video src="${src}" controls muted></video>`;
    if (index >= maxVisibleVideos) {
        videoCard.style.display = "none";
    }
    videoGallery.appendChild(videoCard);
});


