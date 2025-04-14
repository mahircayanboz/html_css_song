document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.transition = 'transform 0.3s ease';
    });
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // Add a pulsing effect to the video container
    const videoContainer = document.querySelector('.video-container');
    setInterval(() => {
        videoContainer.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.3)';
        setTimeout(() => {
            videoContainer.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        }, 1000);
    }, 2000);

    // Add continuous color change to the animated text
    const animatedText = document.querySelector('.animated-text');
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        animatedText.style.color = `hsl(${hue}, 70%, 80%)`;
    }, 50);
});