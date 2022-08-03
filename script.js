const navbar = document.querySelector('.fixed-top');
const about = document.querySelector('.about');
const home = document.querySelector('.home');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 250) {
        navbar.classList.add('bg-dark');
    } else if (this.window.scrollY < 500) {
        navbar.classList.remove('bg-dark');
    }
})
