document.querySelector('.main-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});  

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500});