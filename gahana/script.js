let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');
const totalItems = items.length;

function updateSlider() {
    const slider = document.querySelector('.gallery-slider');
    const slideWidth = items[0].clientWidth; 
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
});

window.addEventListener('resize', updateSlider); // Adjust slider on window resize
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section, .about-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

// Show the home section by default
showSection('home');const textContainers = document.querySelectorAll('.text-container');

textContainers.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('flipped');
        container.style.transform = container.classList.contains('flipped') ? 'rotateY(180deg)' : 'rotateY(0deg)';
    });
});
