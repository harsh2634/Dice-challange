var a =Math.ceil(6*Math.random());
var b =Math.ceil(6*Math.random());
document.querySelector(".dice .img1").setAttribute("src","images\\dice"+a+".png")
document.querySelector(".dice .img2").setAttribute("src","images\\dice"+b+".png")
if(b>a){
document.querySelector("h1").innerHTML="Player 2 Wins"+"🚩";
}
else if(b<a){
document.querySelector("h1").innerHTML="🚩"+"Player 1 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
