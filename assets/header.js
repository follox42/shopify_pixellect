document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('is-active');
      });
    }
    
    // Hide mobile menu on resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767 && mobileMenu.classList.contains('is-active')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-active');
      }
    });
    
    // Sticky header behavior
    if (document.querySelector('.header--sticky')) {
      let lastScrollTop = 0;
      const header = document.querySelector('.header');
      const headerHeight = header.offsetHeight;
      
      window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > headerHeight && scrollTop > lastScrollTop) {
          // Scrolling down
          header.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  });