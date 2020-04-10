document.getElementById("btn").onclick = function(){
  var random=Math.random();
  var random2=Math.random();
  random2*=6;
  random*=6;
  random2=Math.floor(random2);
  random=Math.floor(random);
  random++;
  random2++;
  if(random==random2){
   document.querySelector("h1").innerHTML="Draw!";
  }
  else if(random>random2){
    document.querySelector("h1").innerHTML="🏆Player1 Wins!";
  }
  else{
   document.querySelector("h1").innerHTML="Player2 Wins!🏆";
  }
  if(random==1){
   document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
  }
  else if(random==2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
  }
  else if(random==3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
  }
  else if(random==4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
  }
  else if(random==5){
   document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
  }
  else if(random==6){
   document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png"); 
  }

  if(random2==1){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
  }
  else if(random2==2){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
  }
  else if(random2==3){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
  }
  else if(random2==4){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
  }
  else if(random2==5){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
  }
  else if(random==6){
   document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png"); 
  }

}

