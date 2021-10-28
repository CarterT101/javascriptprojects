function fullsentence() {
    var part_1 = "This is ";
    var part_2 = "a completely";
    var part_3 = " different sentence.";
    var whole_sentence = part_1.concat(part_2, part_3); //added all variables together in a string
    document.getElementById("concat").innerHTML = whole_sentence;
}

function slicemethod() {
    var Sentence = "I will take one word out of this sentence.";
    var Section = Sentence.slice(16,20); //finds characters 16 through 20, which happen to be "word" in this sentence
    document.getElementById("slice").innerHTML = Section; 
}

function upper() {
    var upp = "Click to make this all uppercase"
    var upper = upp.toUpperCase(); //makes upp variable all uppercase
    document.getElementById("upp").innerHTML = upper;
}

function dem() {
    let str = "Visit W3Schools!"; 
    document.getElementById("demo").innerHTML = str.search("W3"); //finds character value of W3 which is 6 
}

function string_method() {
    var Z=102;
    document.getElementById("numberstostring").innerHTML = Z.toString(); //makes z the variable a string instead of a number
}
    
function precision_method() {
    var B=12938.31012375698123;
    document.getElementById("precision").innerHTML = B.toPrecision(10); //sets precise amount of numbers to 10
}

function tofixed_method() {
    var val1 = document.getElementById("input1").value;
    var val2 = parseFloat(val1).toFixed(2); //sets variable to a number that can have decimal points and then fixes it to 2 instead of what the user inputted which might have been more than 2 decimal points
    document.getElementById("answer").innerHTML = val2;
}

function valueofmethod() {
    W=120;
    document.getElementById("valueof").innerHTML = W.valueOf(); //sets the value back to primative data type
}