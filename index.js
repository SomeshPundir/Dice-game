//alert("hello");
var player1Dice=Math.floor(Math.random()*6)+1;
var player2Dice=Math.floor(Math.random()*6)+1;

document.querySelector("#img1").setAttribute("src","images/dice"+ player1Dice +".png");
document.querySelector("#img2").setAttribute("src","images/dice"+ player2Dice +".png");
if(player1Dice<player2Dice){
    document.getElementById("heading").innerHTML=("player 2 wins");

}
else if(player1Dice>player2Dice){
    document.getElementById("heading").innerHTML=( "player1 wins");
 
}
else{
    document.getElementById("heading").innerHTML=("draw");

}
