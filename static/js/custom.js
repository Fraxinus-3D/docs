/* Custom JS - Enhanced Interactivity */

document.addEventListener('DOMContentLoaded', function() {
  const heroImage = document.querySelector('.header-info img');
  if (heroImage) {
    heroImage.classList.add('floating-element');
  }

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

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    const gradient = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(255, 107, 53, 0.1), transparent), 
                      linear-gradient(135deg, #0f1419 0%, #1a1f28 100%)`;
    document.body.style.background = gradient;
  });

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
