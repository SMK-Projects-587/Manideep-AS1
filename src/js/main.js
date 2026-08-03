import '../scss/main.scss';

import hamIcon from '../assets/ham.svg';
import closeIcon from '../assets/close.svg';

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');

  if (mobileMenu.classList.contains('active')) {
    menuIcon.src = closeIcon;
    menuIcon.alt = 'Close';
  } else {
    menuIcon.src = hamIcon;
    menuIcon.alt = 'Menu';
  }
});

// Close mobile menu when switching to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove('active');
    menuIcon.src = hamIcon;
    menuIcon.alt = 'Menu';
  }
});
