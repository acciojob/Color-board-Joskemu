//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  
  // Create 800 boxes dynamically
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Add hover effect to each box
    square.addEventListener('mouseenter', function() {
      square.style.transition = 'background-color 1s ease'; // Reset transition on hover
      setTimeout(() => {
        square.style.backgroundColor = ''; // Reset color after 1 second
      }, 1000); // Reset the color after 1 second
    });
    
    container.appendChild(square);
  }
});
