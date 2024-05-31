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


document.addEventListener('DOMContentLoaded', function () {
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