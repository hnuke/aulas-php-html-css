document.getElementById("exemplo").innerHTML = "For the emperor!"; // innerHTML faz: modifica

document.getElementById("exemplo").style.color = "red";

document.getElementById("exemplo").style.fontSize = "36px";

document.getElementsByTagName("h1")[0].innerHTML = "Method Finding!";

const collection = document.getElementsByTagName("h1")
for(i = 0; i < collection.length; i++){
    collection[i].innerHTML = "Kill"
}

document.getElementsByClassName("exemplo2")[0].innerHTML = "BY CHAOS!"; // por mais que apenas tenha um elemento nessa classe, devemos colocar a posicao []

document.getElementById("personagem").src = "pacman.png"



function mudarCor(){
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;


    document.getElementById("text").style.color = "rgb("+ r +","+ g +","+ b +")"
}