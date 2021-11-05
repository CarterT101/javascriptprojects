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

$("#slideshow > div:gt(0)").hide();

        setInterval(function() {
            $('#slideshow > div:first')
            .fadeout(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        }, 3000);