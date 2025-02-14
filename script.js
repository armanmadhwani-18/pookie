// Function to generate random position for "No" button within the container
function getRandomPosition(containerRect, buttonRect) {
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
  
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    return { x: randomX, y: randomY };
  }
  
  // Add event listener to "No" button
  const noButton = document.getElementById('noButton');
  const container = document.querySelector('.container');
  
  noButton.addEventListener('mouseover', () => {
    // Get the dimensions of the container and the button
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
  
    // Generate a random position within the container
    const position = getRandomPosition(containerRect, buttonRect);
  
    // Update the button's position
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