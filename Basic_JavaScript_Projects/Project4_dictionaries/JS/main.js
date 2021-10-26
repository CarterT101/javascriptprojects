function my_Dictionary() { //creating dictionary
    var Car = { //created variable
        Color: "MetalGray", //established key and values
        Brand: "Tesla",
        Model: "ModelS",
        Year: 2021,
    };
    delete Car.Year; //deleted a value
    document.getElementById("Dictionary").innerHTML = Car.Year; //display value after clicked on in HTML web page
}