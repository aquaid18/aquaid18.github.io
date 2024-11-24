// Sidebar toggle functionality
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

// Open sidebar
openSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    openSidebarBtn.style.display = "none"; // Hide the toggle button
});

// Close sidebar
closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    openSidebarBtn.style.display = "flex"; // Show the toggle button
});

// Close sidebar when clicking outside (optional)
document.addEventListener("click", (event) => {
    if (
        !sidebar.contains(event.target) && 
        !openSidebarBtn.contains(event.target) &&
        sidebar.classList.contains("active")
    ) {
        sidebar.classList.remove("active");
        openSidebarBtn.style.display = "flex"; // Show the toggle button
    }
});
