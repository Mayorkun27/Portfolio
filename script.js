AOS.init();

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.terminal-loader').style.display = 'none';
    document.querySelector('.mainContent').style.display = 'block';
  }, 5000);
});


const recents = [
  {
      title: "Universe University",
      image: "images/img23.jpg",
      description: "Universe is an informative university website developed as assessment.",
      yearDeveloped: "2024",
      techUsed: "HTML, CSS, Bootstrap, and JavaScript",
      viewURL: "https://universeuniversity.vercel.app",
  },
  {
      title: "Mediconnect",
      image: "images/img22.png",
      description: "Mediconnect is a landing page built for a telemedicine system.",
      yearDeveloped: "2024",
      techUsed: "HTML, CSS, Bootstrap, and JavaScript",
      viewURL: "https://mediconnect.netlify.app",
  },
  {
      title: "Aurora Blog",
      image: "images/img24.png",
      description: "Aurora Blog is a landing page featuring blogs.",
      yearDeveloped: "2024",
      techUsed: "HTML, CSS, Bootstrap, and JavaScript",
      viewURL: "https://aurorablogger.netlify.app",
  },
];

const recentsContainer = document.getElementById("recentsContainer");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDescText = document.getElementById("modalDescText");
const modalYear = document.getElementById("modalYear");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");
const closeModal = document.querySelector(".close");

// Dynamically populate recents
recents.forEach((recent, index) => {
  const recentCard = `
      <div class="col-lg-4 col-md-6 col-12 mx-auto my-3">
          <div class="card-img recent-img" data-index="${index}">
              <img src="${recent.image}" alt="${recent.title}" class="img-fluid">
          </div>
      </div>
  `;
  recentsContainer.innerHTML += recentCard;
});

// Handle click events to open the modal
document.querySelectorAll(".recent-img").forEach((imgElement) => {
  imgElement.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;
      const { title, image, description, yearDeveloped, techUsed, viewURL } = recents[index];

      // Set modal content
      modalImg.src = image;
      modalTitle.textContent = title;
      modalDescText.textContent = description;
      modalYear.textContent = `Year Developed: ${yearDeveloped}`;
      modalTech.textContent = `Technologies: ${techUsed}`;
      modalLink.href = viewURL;
      modalLink.textContent = viewURL;

      // Show modal
      modal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
      modal.style.display = "none";
  }
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

