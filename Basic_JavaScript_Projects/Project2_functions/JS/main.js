function add(num1, num2) {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var answ = document.getElementById("answer");
        answ.value = num1 + num2;
}

function concatenate() {
        var sentence = "I guess you";
        sentence += " get a surprise.";
        document.getElementById("words").innerHTML = sentence;

}
