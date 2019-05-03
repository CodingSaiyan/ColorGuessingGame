var numberOfSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton  = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
           modeButtons[0].classList.remove("selected");
           modeButtons[1].classList.remove("selected");
           this.classList.add("selected");
           //figure out how many sqaures to show
           this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
           //update page to reflect changes
           reset();
        })
    }

    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i]
    
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                resetButton.textContent = "Play Again";
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again!"
            }
        })
    }

    reset();
    
}




resetButton.addEventListener("click", function() {
reset();
})


function reset() {
        //generate all new colors
        colors = generateRandomColors(numberOfSquares);
        //pick a new random color from array
        pickedColor = pickColor();
        //change color display to match picked color
        colorDisplay.textContent = pickedColor;
        //change colors of squares
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        message.textContent = "";
        resetButton.textContent = "New Colors";
        h1.style.backgroundColor = "steelblue";
}




let changeColors = (color) => {
    //loop through all sqaures
    for(var i = 0; i < colors.length; i++){
        
        //change each square color to match given color
        squares[i].style.backgroundColor = color;
    }


}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
} 

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
    //add num random colors to array
    arr.push(randomColor())
    //get random color and push into array

    }
    //return the array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
   //pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b =  Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}