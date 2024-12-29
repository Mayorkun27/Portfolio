


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.terminal-loader').style.display = 'none';
    document.querySelector('.mainContent').style.display = 'block';
  }, 5000);
});

const backToTop = document.querySelector(".backToTop");
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

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
const mobileView = document.getElementById('mobileView');
const closeMobileNav = document.getElementById('closeMobileNav');

menuIcon.addEventListener('click', function() {
  mobileView.classList.toggle('show');
  menuIcon.classList.toggle('open'); // Add the active class to transform the icon
  console.log("clicked");
});

closeMobileNav.addEventListener('click', function() {
  mobileView.classList.toggle('show');
  menuIcon.classList.toggle('open'); // Add the active class to transform the icon
});

const links = document.querySelectorAll(".mobile-view .nav-link");
links.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileView.classList.contains("show")) {
      mobileView.classList.remove("show");
    }
  });
});

