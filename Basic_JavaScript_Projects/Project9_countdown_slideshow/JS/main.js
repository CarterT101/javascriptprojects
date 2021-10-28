function countdown() {
    var seconds = document.getElementById("seconds").value; //grabs number inputted

    function tick() {
        seconds = seconds - 1; //sets seconds equal to seconds - 1 to countdown
        document.getElementById("timer").innerHTML = seconds; //sets innerHTML to seconds variable
        var time = setTimeout(tick, 1000); //pausing for 1000ms, 1 second
        if(seconds == -1) { //if timer reaches -1, it will alert
            alert("Time's up!");
            clearTimeout(time); //clear time variable
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick();     /*goes to beginning of function. goes through each line above, minus 1 from timer, 
                goes through if, and then goes to this line which brings it back to the top of the 
                tick function to minus one second again */
}

var slideIndex = 1; //sets slideindex to 1 which is the first photo
showSlides(slideIndex); //shows first picture

//nextprevious controls

function plusslides(n) { 
    showSlides(slideIndex += n); //changes index depending on if they hit prev or next
}

//thumbnail image controls

function currentslide(n) {
    showSlides(slideIndex = n); //changes current slide on dot button click
}

function showSlides(n) { 
    var i; //creates i variable
    var slides = document.getElementsByClassName("Slides"); //grabs Slides class and sets it equal to variable slides
    var dots = document.getElementsByClassName("dots"); //creates dots variable and sets it equal to dots class
    if (n > slides.length) {slideIndex = 1} //if n parameter is greater than total amount of slides, in this case 4, sets slideindex = 1
    if (n < 1) {slideIndex = slides.length} // if n parameter is less than 1, sets index to slides length, in this case 4. These two lines are for making sure it will stay in the amount of slides and pictures there are
    for (i = 0; i < slides.length; i++) { // sets i = 0, checks if it is less than total slide length, and then add ones. 
        slides[i].style.display = "none"; // makes sure only one slide shows up at a time
    }
    for (i = 0; i < dots.length; i++) { //sets i equal to 0, checks if it is less than dot amount, and then adds one. 
        dots[i].className = dots[i].className.replace(" active", ""); //removes "active" from other dots, ensures that not all of the dots are highlighted
    }
    slides[slideIndex-1].style.display = "block"; //displays slide at current slide index
    dots[slideIndex-1].className += " active"; //adds active class to the dot at current slide index
}