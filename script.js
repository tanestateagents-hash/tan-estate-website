document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector('.video-container iframe');
    const unmuteButton = document.querySelector('.unmute-button');

    if (iframe && unmuteButton) {
        const player = new Vimeo.Player(iframe);

        // Start video with muted autoplay
        player.play().catch(function(error) {
            console.error("Autoplay error:", error);
        });

        // Toggle mute/unmute
        let isMuted = true;
        unmuteButton.addEventListener('click', function() {
            if (isMuted) {
                player.setMuted(false);
                unmuteButton.textContent = 'Mute';
            } else {
                player.setMuted(true);
                unmuteButton.textContent = 'Unmute';
            }
            isMuted = !isMuted;
            unmuteButton.classList.toggle('hidden');
        });

        // Initially hide the button after a delay
        setTimeout(() => {
            unmuteButton.classList.add('hidden');
        }, 3000);
    } else {
        console.warn("Vimeo iframe or unmute button not found.");
    }
});