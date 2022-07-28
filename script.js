const navbar = document.querySelector('.fixed-top');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 250) {
        navbar.classList.add('bg-dark');
    } else if (this.window.scrollY < 500) {
        navbar.classList.remove('bg-dark');
    }
})