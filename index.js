confetti({
  particleCount: 600,
  spread: 150,
  origin: { x: 0.5, y: 0.5 },
  colors: ["#ff0000", "#0000ff", "#ffcc00"],
});

window.onload = () => {
  confetti({
    particleCount: 800,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
  });
  setTimeout(() => {
    confetti.reset();
  }, 8000);
};

// Get the elements by their IDs
const openButton = document.getElementById("openRossPopup");
const closeButton = document.getElementById("closeRossPopup");
const popup = document.getElementById("rossPopup");
const overlay = document.getElementById("overlay");

// Function to open the popup
function openPopup() {
  popup.style.display = "block"; // Show the popup
  overlay.style.display = "block"; // Show the overlay
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none"; // Hide the popup
  overlay.style.display = "none"; // Hide the overlay
}

// Add event listener to open the popup when the button is clicked
openButton.addEventListener("click", openPopup);

// Add event listener to close the popup when the close button is clicked
closeButton.addEventListener("click", closePopup);

// Add event listener to close the popup if the overlay is clicked
overlay.addEventListener("click", closePopup);
