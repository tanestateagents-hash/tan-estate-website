document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector(".hero-iframe");
    const fallback = document.querySelector(".hero-fallback");
    if (iframe && !iframe.src.includes("https://vimeo.com")) {
        fallback.style.display = "block";
    }
});
