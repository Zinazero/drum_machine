// Get the display element by its ID
const displayP = document.getElementById("display");

// Function to play audio when triggered by click event
function playAudio(event) {
  // Get the clicked button element
  var button = event.target;

  // Find the ID of the child element with class "clip"
  var childId = button.querySelector(".clip").id;

  // Get the audio element by its ID
  var audio = document.getElementById(childId);

  // Reset the audio to the beginning
  audio.currentTime = 0;

  // Play the audio
  audio.play();

  // Get the ID of the clicked button
  var idText = event.target.id;

  // Replace hyphens with spaces in the ID text
  var displayText = idText.replace(/-/g, " ");

  // Set the display text to the modified ID
  displayP.innerText = displayText;
}

// Function to play audio when triggered by keydown event
function playAudioKey() {
  // Get the audio element based on the key pressed
  var audio = document.getElementById(event.key.toUpperCase());

  // Reset the audio to the beginning
  audio.currentTime = 0;

  // Play the audio
  audio.play();

  // Get the ID of the parent element of the audio
  var idText = audio.parentNode.id;

  // Replace hyphens with spaces in the ID text
  var displayText = idText.replace(/-/g, " ");

  // Set the display text to the modified ID
  displayP.innerText = displayText;
}

// Add a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  var key = event.key.toUpperCase();
  
  // Check if the pressed key matches the desired keys
  if (
    key === "Q" ||
    key === "W" ||
    key === "E" ||
    key === "A" ||
    key === "S" ||
    key === "D" ||
    key === "Z" ||
    key === "X" ||
    key === "C"
  ) {
    // Call the playAudioKey function with the pressed key
    playAudioKey(event.key);
  }
});
