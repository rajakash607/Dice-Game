var imageno = Math.round(Math.random()*6);
var imagesouurce ="images/dice" + imageno + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imagesouurce);

var imageno2 = Math.round(Math.random()*6);
var imagesouurce2 ="images/dice" + imageno2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imagesouurce2);

if (imageno<imageno2) {
    document.getElementsByTagName("h1")[0].innerHTML = "REFRESH PLZ! player2 wins";
}
else if (imageno==imageno2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw, refresh again";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "REFRESH PLZ!  player1 wins";
}
