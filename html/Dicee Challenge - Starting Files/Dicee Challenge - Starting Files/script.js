var heading = document.querySelector("h1");
var img1= document.getElementsByClassName('img1')[0];
var img2= document.getElementsByClassName('img2')[0];

var pl1 = Math.floor((Math.random()*6)+1);
var pl2 = Math.floor((Math.random()*6)+1);

img1.setAttribute("src","images/dice"+pl1+".png");
img2.setAttribute("src","images/dice"+pl2+".png");

if (pl1>pl2) {
    heading.innerText = "Player 1 Wins";
}else if(pl1<pl2){
    heading.innerText = "Player 2 Wins";
}else{
    heading.innerText = "Draw";

}