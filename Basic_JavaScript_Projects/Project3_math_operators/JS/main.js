function addition() {
    var addition = 5 + 5; //making variable
    document.getElementById("add").innerHTML = "5 + 5 = " + addition; //replacing id with this and adding the variable onto the string
}

function subtraction() {
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiplydivide() {
    var multiply = 3 * 5;
    var divide = 15/3;
    document.getElementById("multdivide").innerHTML = "3 * 5 = " + multiply + ". 15/3 = " + divide;
}

function simplemath() {
    var math = (5 + 2 - 3) * 3 / 6;
    document.getElementById("simplemath").innerHTML = "Five plus two subtracted by three then multiplied by three and divided by six equals = " + math;
}

function remainder() {
    var remainder = 30%4;
    document.getElementById("remainder").innerHTML = "The remainder of 30 divided by 4 is = " + remainder;
}

function operator() {
    var operate = parseInt(document.getElementById("operator").value); //creating variable and making the string an integer 
    var answeroperate = document.getElementById("answeroperator"); //setting answer equal to ID 
    answeroperate.value = -operate; //changing operator sign 
}

function increment() {
    var inc = parseInt(document.getElementById("increase").value); //setting variable inc equal to ID increase value
    document.getElementById("increase").value = ++inc; //setting ID increase equal to inc value + 1 
}

function decrement() {
    var dec = parseInt(document.getElementById("decrease").value); 
    document.getElementById("decrease").value = --dec; //setting ID decrease equal to dec value - 1
}

function randomnumber() {
    random = Math.random() * 1000; //sets variable random to a random number from 0-1000
    document.getElementById("random").innerHTML = parseInt(random); //sets ID equal to variable random and makes it an integer, so no decimal points
}

function round() {
    document.getElementById("round").value = Math.round(document.getElementById("round").value); //set id round equal to id round but using math.round method
}