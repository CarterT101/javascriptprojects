function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function age_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_ride = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_ride + " to vote.";
}