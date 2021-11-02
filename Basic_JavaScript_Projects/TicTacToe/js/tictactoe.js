// keeps track of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves, used to determine win conditions
let selectedSquares = [];

//function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected aready
    //the .some() method used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves html element id that was clicked
        let select = document.getElementById(squareNumber);
        //condition checks whos turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png") '
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls function to check for any win conditions
        checkWinConditions();
        //condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //change active player to 'X'
            activePlayer='X';
        }

        //This function plays sound
        audio('./media/place.mp3');
        //condition checks to see if it is computers turn
        if(activePlayer === 'O') {
            //this function disables clicking for computer choice
            disableClick();
            //function waits 1 second before computer places image and enables click
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }

    //this function results in a random square being selected
    function computersTurn() {
        //boolean is needed for our while loop
        let success = false;
        //variable stores a random number 0-8
        let pickASquare;
        //condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //random nunber between 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number evaluated returns true, square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //changes boolean and ends the loop
                success=true;
            };
        }
    }
}

//function parses the selectedSquares array to search for win conditions 
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() { //checks for every possible winning scenario of either X or O placed in a square
    // X 0, 1, 2 condition
    if          (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if     (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if     (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if     (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if     (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 5587) }
    // X 2, 5, 8 condition
    else if     (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition
    else if     (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if     (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if     (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition
    else if     (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 508) }
    // O 6, 7, 8 condition
    else if     (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if     (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 10, 558) }
    // O 1, 4, 7 condition
    else if     (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 508, 558) }
    // O 2, 5, 8 condition 
    else if     (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if     (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if     (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //condition checks for a tie, if none of the above conditions register and 9 squares
    //are selected, the code executes
    else if (selectedSquares.length >= 9) {
        //plays tie game sound
        audio('.media/tie.mp3');
        //sets .3 second time before the resetGame is called
        setTimeout(function() { resetGame(); }, 1000);
    }

    //function checks if an array includes 3 strings. used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if 3 variables we pass are all included in our array, true is returned
        //and our else if condition executes the drawWinLine function.
        if (a=== true && b === true && c === true) { return true }
    }
}

//function makes our body element temporarily unclickable
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for placement sound 
function audio(audioURL) {
    //we create new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1 = coordX1,
    //this line indicates where the start of a lines y axis is
    y1 = coordY1, 
    //line indicates where the end of lines x axis is
    x2 = coordX2, 
    //this line indicates where the end of lines y axis is
    y2 = coordY2,
    //this variable stores temporary x axis data we update in our animation loop
    x = x1,
    //this variable stores temporary y axis data we update in our animation loop
    y = y1;

    //function interacts with the canvas
    function animateLineDrawing() {
        //variables creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //method starts a new path
        c.beginPath();
        //method moves us to a starting point for our line
        c.moveTo(x1, y1);
        //indicates end point in our line
        c.lineTo(x, y);
        //method sets the width of our line
        c.lineWidth = 10;
        //sets color of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //method draws everything we laid out above
        c.stroke();
        //condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //condition adds 10 to previous end x point
            if (x < x2) { x+=10; }
            //condition adds 10 to the previous end y point
            if (y < y2) {y += 10; }
            //condition cancels animation loop
            //if we've reached the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //condition is similar to the one above
        //necessary for the 6, 4, 2 win condition if either X or O won on the diagonal line from right to left
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) {y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //this function clears our canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear); 
        //line clears our canvas
        c.clearRect(0,0,608,608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while win sound is playing
    disableClick();
    //plays win sounds
    audio('./media/winGame.mp3');
    //calls main animation loop
    animateLineDrawing(); 
    //line waits 3 seconds. then, clears canvas, resets game, allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 3000);
}

//function resets game in the event of a tie or win
function resetGame() { 
    //loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //variable gets the HTML element of i
        let square = document.getElementById(String(i))
        //removes our elements backgroundImage
        square.style.backgroundImage = ''; 
    }
    //resets our array so it is empty and we can start over
    selectedSquares = [];
}