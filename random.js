const min = 1; // Minimum value for the random number
const max = 10; // Maximum value for the random number

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
    var redirectToURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6onFkOavpZWKqr8NR9_RwEOGWcNWMOsmH0Q&usqp=CAU';

    // Redirect to the specified URL
    window.location.href = redirectToURL;
}
