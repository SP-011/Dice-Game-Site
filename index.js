function di(){   
   var a = Math.floor(Math.random()*6+1);
    var b = Math.floor(Math.random()*6+1);

    ar = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    for(let i=1;i<7;i++){
        if (a===i)
        m1= ar[i-1];
        if (b===i)
        m2= ar[i-1];
    }

    if (a>b){
        document.querySelectorAll("h1")[0].textContent = "Player 1 Wins";
        document.querySelector(".img1").setAttribute("src",m1);
        document.querySelector(".img2").setAttribute("src", m2);
    }
    else if(a<b){
        document.querySelectorAll("h1")[0].textContent = "Player 2 Wins";
        document.querySelector(".img1").setAttribute("src", m1);
        document.querySelector(".img2").setAttribute("src", m2);
    }
    else{
        document.querySelectorAll("h1")[0].textContent = "It's a Draw!";
        document.querySelector(".img1").setAttribute("src", m1);
        document.querySelector(".img2").setAttribute("src", m2);
    }
}
var a = Math.floor(Math.random()*6+1);
var b = Math.floor(Math.random()*6+1);

ar = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

for(let i=1;i<7;i++){
    if (a===i)
    m1= ar[i-1];
    if (b===i)
    m2= ar[i-1];
}

if (a>b){
    document.querySelectorAll("h1")[0].textContent = "Player 1 Wins";
    document.querySelector(".img1").setAttribute("src",m1);
    document.querySelector(".img2").setAttribute("src", m2);
}
else if(a<b){
    document.querySelectorAll("h1")[0].textContent = "Player 2 Wins";
    document.querySelector(".img1").setAttribute("src", m1);
    document.querySelector(".img2").setAttribute("src", m2);
}
else{
    document.querySelectorAll("h1")[0].textContent = "It's a Draw!";
    document.querySelector(".img1").setAttribute("src", m1);
    document.querySelector(".img2").setAttribute("src", m2);
}