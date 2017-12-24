// Check if the user is ready to play!
// var button =   --  getElementById ("try-me"); --  mouse.onClick start the dialogue when the user clicks the button


var x = document.getElementById("game");
x.onclick = function () {

	confirm("Are you ready? I will ask you a few questions. This is my first JavaScript")
var age = prompt("what's your age?")
if (age < 13) {confirm("You are allowed to play, but I am not responsible if you get bored");}
else {(confirm("You are mature enough to play this game without getting bored"));}

confirm("You are in Hades and you have 2 choices");
confirm("You either take Aenis with you, or you leave or you become the creator of AI and stay alive'");
var userAnswer = prompt("What do you choose? AI or Aenis?");
if (userAnswer === "AI") {
  document.write("<h1>JavaScript Tutorial</h1>");
  confirm("You will remain alive and AI will be at your command");}
else {confirm("Aenis is yours and who cares about AI? Even if it will destroy humanity one day.");}
var feedback = prompt("Please give my game a rating between 0-10")
if (feedback >=7) {confirm("Thank you! This was my very first attempt at coding a game!");}
else {confirm("I'll keep practicing coding");}
}


function show(); {

