function diceRoller() {
    var x, y;
    x = Math.floor((Math.random() * 6) + 1);
    y = Math.floor((Math.random() * 6) + 1);
    document.getElementById("rollButton").innerHTML = x +" "+ y;
}