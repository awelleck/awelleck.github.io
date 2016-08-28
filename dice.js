var pics = ["img/die1.svg", "img/die2.svg", "img/die3.svg", "img/die4.svg", "img/die5.svg", "img/die6.svg"];

function diceRoller() {
    var x, y;
    x = Math.floor((Math.random() * 6));
    y = Math.floor((Math.random() * 6));
     document.getElementById("rollButton").innerHTML = "<img src=\"" + pics[x] + "\"/> <img src=\"" + pics[y] + "\"/>"; 
}