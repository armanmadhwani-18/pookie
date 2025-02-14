// Function to generate random position for "No" button
function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randomX = Math.random() * (width - 100); // Subtract button width
    const randomY = Math.random() * (height - 50); // Subtract button height
    return { x: randomX, y: randomY };
  }
  
  // Add event listener to "No" button
  const noButton = document.getElementById('noButton');
  noButton.addEventListener('mouseover', () => {
    const position = getRandomPosition();
    noButton.style.position = 'absolute';
    noButton.style.left = `${position.x}px`;
    noButton.style.top = `${position.y}px`;
  });
  
  // Show custom loading GIF when "Yes" is clicked
  const yesButton = document.getElementById('yesButton');
  const loadingContainer = document.getElementById('loading');
  
  yesButton.addEventListener('click', () => {
    // Show the loading GIF
    loadingContainer.classList.remove('hidden');
  
    // Redirect to the next page after 3 seconds
    setTimeout(() => {
      window.location.href = 'valentine.html';
    }, 3000); // 3 seconds delay
  });