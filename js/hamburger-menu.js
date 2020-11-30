const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.nav-list');

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}