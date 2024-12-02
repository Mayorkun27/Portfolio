AOS.init();


// document.addEventListener("DOMContentLoaded", function() {
//   setTimeout(function() {
//     document.querySelector('.terminal-loader').style.display = 'none';
//     document.querySelector('.mainContent').style.display = 'block';
//   }, 5000);
// });

const backToTop = document.querySelector(".backToTop");
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  // Show the back-to-top button when scrolling down
  if (currentScrollPos > 100) {
    if (prevScrollPos < currentScrollPos) {
      backToTop.classList.add("show"); // Add the sliding animation
    } else {
      backToTop.classList.remove("show"); // Remove it when scrolling up
    }
  } else {
    backToTop.classList.remove("show"); // Ensure the button is hidden when at the top
  }

  prevScrollPos = currentScrollPos;
};


const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.getElementById('navbar-menu');

menuIcon.addEventListener('click', function() {
    navbarMenu.classList.toggle('show');
    menuIcon.classList.toggle('open'); // Add the active class to transform the icon
});
