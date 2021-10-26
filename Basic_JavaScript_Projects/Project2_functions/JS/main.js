function add(num1, num2) {
        var num1 = parseInt(document.getElementById("num1").value); //brings first inputted number from line
        var num2 = parseInt(document.getElementById("num2").value); //brings second inputted number from line 2
        var answ = document.getElementById("answer"); //makes answ equal to the input box with the id of "answer"
        answ.value = num1 + num2; //finds answer by taking the two inputted numbers by adding them together
}

function multiply(num1, num2) {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var answ = document.getElementById("answer");
        answ.value = num1 * num2;
}

function concatenate() {
        var sentence = "I guess you"; //defines variable sentence
        sentence += " get a surprise."; //adds words to the variable sentence
        document.getElementById("words").innerHTML = sentence; //replaces id "words" innerHTML with the sentence variable by making them equal to each other

}

