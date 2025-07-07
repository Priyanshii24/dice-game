
// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Step 2: Create the image source string based on the random number
var randomDiceImage = "dice" + randomNumber1 + ".png"; // e.g., "dice3.png"
var randomImageSource = "images/" + randomDiceImage;//images/dice.png 1 to 6

// Step 3: Set the src attribute of the left <img> element
var image1 = document.querySelectorAll("img")[0]; // selects the first (left) <img>
image1.setAttribute("src", randomImageSource);

//same for 2nd player
var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage= "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);