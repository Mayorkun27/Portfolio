const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let rotationValue = 0;  // Track the current manual rotation
let timeoutId; // To store the timeout for resuming auto-run

// Function to stop the autoRun animation
function stopAutoRun() {
    slider.style.animation = 'none';  // Temporarily stop the autoRun animation
    clearTimeout(timeoutId);  // Clear any existing timeouts
}

// Function to start the autoRun animation after manual rotation
function startAutoRun() {
    timeoutId = setTimeout(() => {
        slider.style.animation = 'autoRun 20s linear infinite';
    }, 5000);  // Restart autoRun animation after 5 seconds
}

// Function to manually rotate the carousel
function rotateManual(deg) {
    rotationValue += deg;
    slider.style.transform = `perspective(1000px) rotateX(-3deg) rotateY(${rotationValue}deg)`;
}

// Event listener for the previous button
prev.addEventListener('click', () => {
    stopAutoRun();
    rotateManual(-36);  // Rotate left
    // startAutoRun();
});

// Event listener for the next button
next.addEventListener('click', () => {
    stopAutoRun();
    rotateManual(36);  // Rotate right
    // startAutoRun();
});