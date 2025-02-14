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
  
    const size = Math.random() * 110 + 20; // Random size between 20px and 130px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
  
    // Randomize position across the full width of the screen
    const x = Math.random() * (window.innerWidth - size); // Ensure hearts fit within the screen width
    heart.style.left = `${x}px`;
  
    // Randomize vertical start position slightly above the top
    const y = Math.random() * -100 - 50; // Start slightly above the top
    heart.style.top = `${y}px`;
  
    const duration = Math.random() * 5 + 3; // Random duration between 3s and 8s
    heart.style.animationDuration = `${duration}s`;
  
    container.appendChild(heart);
  
    // Remove the heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
  
  // Start generating hearts as soon as the page loads
  window.addEventListener('load', () => {
    setInterval(createHeart, 200); // Generate hearts continuously
  });