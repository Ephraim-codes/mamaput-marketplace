document.addEventListener("DOMContentLoaded", () => {
  
  const header = document.querySelector('.id-header');
  if (header) {
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      header.classList.remove('opacity-0');
      header.style.transform = 'translateY(0)';
    }, 100); 
  }

  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observerOptions = {
    root: null,          
    threshold: 0.12,     
    rootMargin: "0px"
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
    
        entry.target.classList.remove('opacity-0');
        
        entry.target.classList.remove('-translate-x-12', 'translate-x-12', 'translate-y-12');
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    scrollObserver.observe(element);
  });

  const footer = document.querySelector('.id-footer');
  
  if (footer) {
    const footerOptions = {
      root: null,
      threshold: 0.05,  
      rootMargin: "0px"
    };

    const footerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    }, footerOptions);

    footerObserver.observe(footer);
  }

});

const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileMenu && menuIcon) {
    menuBtn.addEventListener('click', () => {
      // 1. Drop down or hide the floating selection card
      mobileMenu.classList.toggle('hidden');

      // 2. Check if the menu is now open
      const isMenuOpen = !mobileMenu.classList.contains('hidden');

      if (isMenuOpen) {
        // Remove the 3 bars class and replace it with the Font Awesome close "X" mark
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        // Remove the "X" mark and put back the 3 bar layout lines
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });
  }