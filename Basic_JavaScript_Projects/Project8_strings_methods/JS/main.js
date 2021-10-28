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
    var upp = document.getElementById("upp");
    var upper = upp.toUpperCase();
    document.getElementById("upp").innerHTML = upper;
}
