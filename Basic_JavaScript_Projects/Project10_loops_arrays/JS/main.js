function call_loop() {
    var value1 = parseInt(document.getElementById("value1").value);
    while (value1 > -1) {
        var value2 = "<br>" + value1;
        value1--;
    }
    document.getElementById("loop").innerHTML = value2.toString();
}