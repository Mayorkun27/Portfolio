AOS.init();

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.terminal-loader').style.display = 'none';
    document.querySelector('.mainContent').style.display = 'block';
  }, 1000);
});

let prevScrollPos = window.pageYOffset;
const backToTop = document.querySelector(".backToTop");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    backToTop.style.display = "grid"
  }
  else if (currentScrollPos = "0") {
    backToTop.style.display = "none"
  }
  prevScrollPos = currentScrollPos;
}