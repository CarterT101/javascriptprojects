function validateForm() {
    let x = document.forms["form1"]["fname"].value;
    if (x == "") {
        alert("Input must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("popform").style.display = "block";
}

function closeForm() {
    document.getElementById("popform").style.display = "none";
}

