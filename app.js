const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click',()=>{
       nav.classList.toggle('nav-active');
    });
    //Animations
    navLinks.forEach((link, index) => {
         link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 0.3}s'
         console.log(index / 7);
    });
}

navSlide();