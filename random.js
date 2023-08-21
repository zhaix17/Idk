const min = 1; // Minimum value for the random number
const max = 100000; // Maximum value for the random number

// Get the user's input
const numTimes = prompt("Enter any random number:");

// Convert the user's input to a number
const numberOfTimes = parseInt(numTimes);

// Generate a random number within the specified range
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// Check if the random number is even
if (randomNumber % 2) {
        alert("congrats mahal ka niya");
} else {
    // Display 
    fetch("https://example.com/scary-face-image.jpg")
    .then(response => {
      if (response.ok) {
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    })
    .then(blob => {
      const imgUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.src = imgUrl;
      document.body.appendChild(img);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
