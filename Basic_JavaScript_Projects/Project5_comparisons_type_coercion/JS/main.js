function type() {
    var type = document.write(typeof 3); //checking type of data 
    document.getElementById("type").innerHTML = type; //replacing id type innerhtml with type variable
}

function coercion() {
    var coer = document.write("10" + 3); //adding coercion, string 10 + number 3 
    document.getElementById("coercion").innerHTML = coer;
}

function test() {
    document.getElementById("test").innerHTML = isNaN('yes'); //asking if yes is a number or not
}

function test2() {
    var test2 = 3E310;
    document.getElementById("test2").innerHTML = test2; //displaying positive infinity
}

function compare() {
    var num1 = eval(document.getElementById("num1").value); //bringing ID num1 into variable num1 as an Integer
    var num2 = eval(document.getElementById("num2").value); //bringing ID num2 into variable num2 as an Integer
    var answer = num1>num2; //comparing num1 to num2 and making the answer the variable "answer"
    document.getElementById("answer").value = answer;    //making ID answer equal to variable answer
}

function equal() {
    var num3 = parseInt(document.getElementById("num3").value); //bringing ID num3 into variable num1 as an Integer
    var num4 = parseInt(document.getElementById("num4").value); //bringing ID num4 into variable num2 as an Integer
    var answer2 = num3==num4; //comparing num3 to num4 and making the answer the variable "answer2"
    document.getElementById("answer2").value = answer2;    //making ID answer equal to variable answer
}

function morecompare() {
    var num5 = document.getElementById("value1").value; //bringing ID num1 into variable num1 as an Integer
    var num6 = document.getElementById("value2").value; //bringing ID num2 into variable num2 as an Integer
    var answer3 = num5===num6; //comparing num1 to num2 and making the answer the variable "answer"
    document.getElementById("answer3").value = answer3;    //making ID answer equal to variable answer
}

function and() {
    var and = 10>2 && 3>4; //checks if both are correct in order to display true or false using && 
    document.getElementById("clickme1").innerHTML = and;
}

function or() {
    var or = 10>2 || 6>4; //checks if one or the other are correct in order to display true or false using ||
    document.getElementById("clickme2").innerHTML = or;
}

function not() {
    var not = !(5>4);
    document.getElementById("clickme3").innerHTML = not;
}

console.log(2+3); //asking console to add 2 and 3 together
console.log(3<2); //asking console Boolean logic