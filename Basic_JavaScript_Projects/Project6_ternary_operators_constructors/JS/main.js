function ride_function() {
    var height, can_ride; //creating two variables
    height = document.getElementById("height").value; //gets height from input
    can_ride = (height < 52) ? "You are too short":"You are tall enough"; //deciding factor to see which sentence will be output
    document.getElementById("ride").innerHTML = can_ride + " to ride."; //output of answer
}

function age_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_ride = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_ride + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //constructor
    this.Vehicle_Make = Make; //objects
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating variables
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //function to display variable and it's values
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Computer(Brand, Year, Processor) {
    this.Computer_Brand = Brand;
    this.Computer_Year = Year;
    this.Computer_Processor = Processor;
}

var John = new Computer("Dell", 2020, "AMD");
var Bill = new Computer("Mac", 2019, "Intel");
function Computer_function() {
    document.getElementById("New_and_This").innerHTML = 
    "John has a " + John.Computer_Brand + " computer with an " + John.Computer_Processor + " processor made in " +John.Computer_Year;
}

function Subtract() {
    document.getElementById("Nested_Function").innerHTML = subtract();
    function subtract() {
        var starting = 100;
        function sub_one() {starting -= 1;}
        sub_one();
        return starting;
    }
}
