// Create falling hearts
const container = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random() * 20 + 10; // Random size between 10px and 30px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  const x = Math.random() * window.innerWidth;
  heart.style.left = `${x}px`;

  const duration = Math.random() * 5 + 3; // Random duration between 3s and 8s
  heart.style.animationDuration = `${duration}s`;

  container.appendChild(heart);

  // Remove the heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Generate hearts continuously
setInterval(createHeart, 200);