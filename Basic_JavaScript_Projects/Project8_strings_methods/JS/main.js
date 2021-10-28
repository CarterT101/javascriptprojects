function fullsentence() {
    var part_1 = "This is ";
    var part_2 = "a completely";
    var part_3 = " different sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concat").innerHTML = whole_sentence;
}

function slicemethod() {
    var Sentence = "I will take one word out of this sentence.";
    var Section = Sentence.slice(16,20);
    document.getElementById("slice").innerHTML = Section; 
}

function upper() {
    var upp = "Click to make this all uppercase"
    var upper = upp.toUpperCase();
    document.getElementById("upp").innerHTML = upper;
}

function dem() {
    let str = "Visit W3Schools!"; 
    document.getElementById("demo").innerHTML = str.search("W3");
}

function string_method() {
    var Z=102;
    document.getElementById("numberstostring").innerHTML = Z.toString();
}
    
function precision_method() {
    var B=12938.31012375698123;
    document.getElementById("precision").innerHTML = B.toPrecision(10);
}

function tofixed_method() {
    var val1 = document.getElementById("input1").value;
    var val2 = parseFloat(val1).toFixed(2);
    document.getElementById("answer").innerHTML = val2;
}

function valueofmethod() {
    W=120;
    document.getElementById("valueof").innerHTML = W.valueOf();
}