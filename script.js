// Function to generate random position for "No" button within the container
function getRandomPosition(containerRect, noButtonRect, yesButtonRect) {
    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;
  
    let randomX, randomY;
  
    // Generate random positions until they don't overlap with the "Yes" button
    do {
      randomX = Math.random() * maxX;
      randomY = Math.random() * maxY;
    } while (
      randomX < yesButtonRect.right &&
      randomX + noButtonRect.width > yesButtonRect.left &&
      randomY < yesButtonRect.bottom &&
      randomY + noButtonRect.height > yesButtonRect.top
    );
  
    return { x: randomX, y: randomY };
  }
  
  // Set initial position for the "No" button
  function setInitialNoButtonPosition() {
    const container = document.querySelector('.container');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
  
    // Get the dimensions of the container, "No" button, and "Yes" button
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();
  
    // Generate a safe initial position for the "No" button
    const position = getRandomPosition(containerRect, noButtonRect, yesButtonRect);
  
    // Set the initial position
    noButton.style.position = 'absolute';
    noButton.style.left = `${position.x}px`;
    noButton.style.top = `${position.y}px`;
  }
  
  // Add event listener to "No" button
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');
  const container = document.querySelector('.container');
  
  noButton.addEventListener('mouseover', () => {
    // Get the dimensions of the container, "No" button, and "Yes" button
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();
  
    // Generate a random position within the container but avoid the "Yes" button
    const position = getRandomPosition(containerRect, noButtonRect, yesButtonRect);
  
    // Update the button's position
    noButton.style.left = `${position.x}px`;
    noButton.style.top = `${position.y}px`;
  });
  
  // Show custom loading GIF when "Yes" is clicked
  const loadingContainer = document.getElementById('loading');
  
  yesButton.addEventListener('click', () => {
    // Show the loading GIF
    loadingContainer.classList.remove('hidden');
  
    // Redirect to the next page after 3 seconds
    setTimeout(() => {
      window.location.href = 'valentine.html';
    }, 3000); // 3 seconds delay
  });
  
  // Set the initial position of the "No" button when the page loads
  window.addEventListener('load', () => {
    setInitialNoButtonPosition();
  });