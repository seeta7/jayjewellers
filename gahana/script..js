// Automatic Zoom-In Feature for All Images
const zoomImages = document.querySelectorAll('.automatic-zoom img');

setInterval(() => {
    zoomImages.forEach(img => {
        img.style.transform = 'scale(1.1)';
        setTimeout(() => {
            img.style.transform = 'scale(1)';
        }, 500);
    });
}, 5000);

// GSAP Animation for the Celebration Content
gsap.from(".celebration-content", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
});

// Add hover effect on button
document.querySelector('.celebrate-button').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.celebrate-button').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
