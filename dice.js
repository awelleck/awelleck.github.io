/**
 * JS for dice and resume alert
 * Andrew Welleck
 */
var pics = ["img/die1.svg", "img/die2.svg", "img/die3.svg", "img/die4.svg", "img/die5.svg", "img/die6.svg"];

function diceRoller() {
  var x, y;
  x = Math.floor((Math.random() * 6));
  y = Math.floor((Math.random() * 6));
  document.getElementById("rollButton").innerHTML = "<img src=\"" + pics[x] + "\"/> <img src=\"" + pics[y] + "\"/>";
}

$(document).ready(function () {
  $('.resume_button').click(function () {
    $('.resume').append("<div class='alert alert-info alert-dismissable' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Info:</strong> Full r&eacute;sum&eacute; available on request.</div>")
  })
});
