const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');
menuButton.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

// Filter projects
function filterProjects(filter) {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block'; // Show all
        } else {
            item.classList.contains(filter) ? item.style.display = 'block' : item.style.display = 'none'; // Show filtered
        }
    });
}

// Skills Slideshow
const skillsContainer = document.querySelector('#skills .overflow-x-scroll');

let scrollInterval = setInterval(() => {
    skillsContainer.scrollBy({ left: 1, behavior: 'smooth' });
}, 30);

// Pause scroll on hover
skillsContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
skillsContainer.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(() => {
        skillsContainer.scrollBy({ left: 1, behavior: 'smooth' });
    }, 30);
});