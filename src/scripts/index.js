// scripts/index.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuIcon.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  
    // Ocultar el menú móvil cuando se hace clic en un enlace
    const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
    for (let i = 0; i < mobileMenuLinks.length; i++) {
      mobileMenuLinks[i].addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    }
  });
  