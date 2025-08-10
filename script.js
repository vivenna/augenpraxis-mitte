let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop){
    // nach unten scrollen
     header.classList.add('header-hidden');
   } else {
    // nach oben scrollen
     header.classList.remove('header-hidden');
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Für mobile Geräte
}, false);