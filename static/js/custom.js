/* Custom JS - Enhanced Interactivity */

document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggler = document.getElementById('theme-toggler');
  const body = document.body;
  const storedTheme = localStorage.getItem('theme');
  
  // Apply stored theme preference
  if (storedTheme === 'light') {
    body.classList.add('light-theme');
  }
  
  // Theme toggle click handler with synchronization
  if (themeToggler) {
    themeToggler.addEventListener('click', function() {
      // Temporarily disable transitions for instant theme change
      document.body.style.transition = 'none';
      document.querySelectorAll('*').forEach(el => {
        el.style.transition = 'none';
      });
      
      // Toggle theme class
      body.classList.toggle('light-theme');
      
      // Force reflow to apply changes immediately
      void body.offsetHeight;
      
      // Re-enable transitions after a short delay
      setTimeout(() => {
        document.body.style.transition = '';
        document.querySelectorAll('*').forEach(el => {
          el.style.transition = '';
        });
      }, 50);
      
      // Store theme preference
      if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Floating animation for hero image
  const heroImage = document.querySelector('.header-info img');
  if (heroImage) {
    heroImage.classList.add('floating-element');
  }

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.container, .entry, h2, h3');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Enhanced hover effects for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1) contrast(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1) contrast(1)';
    });
  });
  
  /*
  let lastScrollTop = 0;
  let isNavVisible = true;
  
  function handleNavScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('nav[aria-label="Main Menu"]');
    
    if (!nav) {
      console.log('Navigation element not found');
      return;
    }
    
    console.log('Scroll position:', currentScroll, 'Last position:', lastScrollTop, 'Nav visible:', isNavVisible);
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      if (isNavVisible) {
        nav.classList.add('nav-hidden');
        isNavVisible = false;
        console.log('Hiding nav - using class');
      }
    } 
    else if (currentScroll < lastScrollTop || currentScroll <= 50) {
      if (!isNavVisible) {
        nav.classList.remove('nav-hidden');
        isNavVisible = true;
        console.log('Showing nav - using class');
      }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  */
});
