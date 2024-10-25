const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');
menuButton.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});