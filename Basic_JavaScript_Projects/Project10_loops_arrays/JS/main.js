function call_loop() {
    var value1 = parseInt(document.getElementById("value1").value); //defining variable 
    var result = "";                                                //creating variable
    while (value1 > -1) {                                           //while value1 is less than -1
        var value2 = "<br>" + value1;                               //created value2 to be equal to a line break and value1
        result += value2;                                           //result variable set equal to value2
        value1--;                                                   //after all of that, subtract 1 from value1
        document.getElementById("loop").innerHTML = result;         //prints result variable in HTML
    }
}

function length() {                                     
    var words = document.getElementById("words").value;     //created words variable, defined it as value of ID words
    var words2 = "";                                        //created new variable
    words2 = words.length;                                  //set words2 equal to words length in characters
    document.getElementById("reply").innerHTML = words2;    //prints results in HTML ID reply
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //sets Y = 0, checks if Y is less than Instruments Length, after it does loop, adds 1 to Y
        Content += Instruments[Y] + "<br>"; // Sets Content variable equal to a value in Instruments ARRAY and adds a line break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //prints Content into ID List_of_Instruments
}

function cat_pics() {
    var Cat_Picture = []; //creates Cat_Picture array
    Cat_Picture[0] = "sleeping"; //defines what index 0 is
    Cat_Picture[1] = "playing"; //defines index 1
    Cat_Picture[2] = "eating"; //defines index 2
    Cat_Picture[3] = "purring"; //defines index 3
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; 
    /*grabs index 2 and puts it in a sentence that prints out on ID Cat*/
}

function testconstant_function() {
    const X=10; //created constant
    //X=2; //attempted to change constant
    document.getElementById("testconstant").innerHTML = X.toString(); //printed constant
}

function constant_function() {
    const Car = {brand:"Chevy", model:"Camaro", year:2021, color:"blue"}; //defined constant array
    Car.color = "red"; //changed color property
    Car.year =  2019; //changed year property
    Car.location = "California"
    document.getElementById("constant").innerHTML = "The " + Car.color + " " + Car.model + " was made in " + Car.year + " in " + Car.location + ".";
    //printed a sentence using the properties
}

function let_function() {
    var X = 10;
    document.getElementById("letfunction").innerHTML = X;
    {
        let X = 12;
        document.getElementById("letfunction2").innerHTML = X;
    }
    document.getElementById("letfunction3").innerHTML = X;
}
function returncontainer() { //function wrap to be called to print return
    function return_function() { // gathering inputted name function
        var name = document.getElementById("replyfunction").value; //grabs inputted name
        return "Hello " + name + ", how are you today?"; //returns a sentence with inputted name
    }
    document.getElementById("returnreply").innerHTML = return_function(); //prints sentence returned
}

function carobject() {
    function cars() {
        let brand = document.getElementById("brand").value; //creating variables and bringing them from inputted HTML
        let model = document.getElementById("model").value;
        let color = document.getElementById("color").value;
        let year = document.getElementById("year").value;
        return "You have a " + year + " " + color + " " + brand + " " + model + " to drive around now.";
        //returns a statement using variables
    }
    document.getElementById("car_object").innerHTML = cars(); //prints created statement through function
}

function break_function() {
    var text = ""; //creates variable
    var i;
    for (i=0; i < 6; i++) { //sets i = 0, if i is less than 6, and after loop is done and repeated, it adds one to the variable "i"
        if (i===3) { //checks if i is equal to 3
            //break; //if it is, it breaks
            continue; //if it is, it continues, "SKIPS"
        }
        text += "The number is " + i + "<br>"; //sets text variable equal to a sentence with number included
    }
    document.getElementById("breakstatement").innerHTML = text; //prints text variable, resets loop
}
