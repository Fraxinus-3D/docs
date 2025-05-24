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
      document.body.style.transition = 'none';
      document.querySelectorAll('*').forEach(el => {
        el.style.transition = 'none';
      });
      
      body.classList.toggle('light-theme');
      
      void body.offsetHeight;
      
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

  // Dynamic background gradient
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    if (!body.classList.contains('light-theme')) {
      const gradient = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(255, 107, 53, 0.1), transparent), 
                        linear-gradient(135deg, #080b0e 0%, #141a24 100%)`;
      document.body.style.background = gradient;
    } else {
      const gradient = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(255, 107, 53, 0.05), transparent), 
                        linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)`;
      document.body.style.background = gradient;
    }
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
});
