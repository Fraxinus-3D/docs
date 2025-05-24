/* Custom JS */

document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.collapsible-year-header');
  headers.forEach(function(header) {
    header.addEventListener('click', function() {
      this.classList.toggle('collapsed');
      const list = this.nextElementSibling; // The UL is the next sibling
      const icon = this.querySelector('.toggle-icon');
      if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        if (icon) icon.textContent = '[-]';
      } else {
        list.style.display = 'none';
        if (icon) icon.textContent = '[+]';
      }
    });
  });
});
