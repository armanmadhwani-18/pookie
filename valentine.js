// Array of predefined heart images
const heartImages = [
    'heart1.png', // Replace with your actual image paths
    'heart2.png',
    'heart3.png',
    'default-heart.png'
  ];
  
  // Function to create falling hearts
  const container = document.querySelector('.heart-container');
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
  
    // Randomly select a heart image
    const randomHeartImage = heartImages[Math.floor(Math.random() * heartImages.length)];
    heart.style.backgroundImage = `url(${randomHeartImage})`;
  
    const size = Math.random() * 100 + 130; // Random size between 20px and 50px
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