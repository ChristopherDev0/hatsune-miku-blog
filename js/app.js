const nav = document.querySelector('#nav');
const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');
const navegation = document.querySelector('#navegation');

openNav.addEventListener('click', () => {
    navegation.classList.add('visible');
    nav.classList.add('visible');
})
closeNav.addEventListener('click', () => {
    navegation.classList.remove('visible');
    nav.classList.remove('visible');
})

//PARALAX
const parallax = document.querySelector('#parallax');
const sectionParalax = document.querySelector('.section-parallax').offsetTop;
function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY('+ (scrollTop)* -0.2+'px)';
}
window.addEventListener('scroll', scrollParallax);