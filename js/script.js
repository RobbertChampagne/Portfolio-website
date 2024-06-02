const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('a.nav-link');
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      if (!this.hasAttribute('download')) {
        event.preventDefault(); // Prevent the default action (the jump scroll)
        var target = document.querySelector(this.getAttribute('href')); // Get the target element
        window.scrollTo({
          top: target.offsetTop, // Scroll the window to the target element
          behavior: 'smooth' // Make the scroll smooth
        });
      }
    });
  });
});

// Add 'hover' class to card when it's touched
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('touchstart', function(e) {
    e.stopPropagation(); // Prevent touch event from bubbling up to document

    // Remove 'hover' class from all cards
    document.querySelectorAll('.card.hover').forEach(card => {
      card.classList.remove('hover');
    });

    // Add 'hover' class to this card
    this.classList.add('hover');
  });
});

// Remove 'hover' class from all cards when anything outside the cards is touched
document.addEventListener('touchstart', function() {
  document.querySelectorAll('.card.hover').forEach(card => {
    card.classList.remove('hover');
  });
});