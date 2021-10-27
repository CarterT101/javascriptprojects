x=10 //global variable

function add() {
    add = x + 3;
    document.getElementById("value1").innerHTML=add;
}

function subtract() {
    y=6 //local variable
    sub = 11-y;
    document.getElementById("value2").innerHTML=sub;
}

function date() {
    if (new Date().getMinutes() >= 50) { //if minutes are greater than or equal to 50, writes "the hour is almost over"
        document.getElementById("good").innerHTML ="The hour is almost over!";
    }
}

function statement() {
    var number = parseInt(document.getElementById("number").value);
    if(number == 7) {                                //if inputted number is equal to 7, it will print the response "Correct"
        document.getElementById("answer").innerHTML = "Correct!";
        }
    else {                                          //if inputted number is not equal to 7, it will print the response "incorrect"
        document.getElementById("answer").innerHTML = "Incorrect.";
    }
}

function time_function() {
    var time = new Date().getHours(); //gets hours and sets it to variable time
    var reply;                          //creates variable reply
    if (time < 12 == time > 0) {        //if time is less than 12 or greater than 0, it will print, it is the morning
        reply = "It is the morning.";
    }
    else if (time >= 12 == time < 18) { //if time is greater than or equal to 12 and less than 18, it will print, it is the afternoon
        reply = "It is the afternoon.";
    }
    else {                          //if it is anything else it will print, it is the evening
        reply = "It is the evening."; 
    }
    document.getElementById("time").innerHTML = reply;
}