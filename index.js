var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdiceimage1= "dice"+randomnumber1+".png";
var randomdiceimage2= "dice"+randomnumber2+".png";

var randomdicesource1 ="images/"+randomdiceimage1;
var randomdicesource2 ="images/"+randomdiceimage2;

document.querySelectorAll("img")[0].setAttribute("src",randomdicesource1);
document.querySelectorAll("img")[1].setAttribute("src",randomdicesource2);


if(randomnumber1>randomnumber2 || randomnumber1<randomnumber2){
    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML="Player 1 wins!🗽";
    }else{
        document.querySelector("h1").innerHTML="Player 2 wins!🗽";

    }

}else{
    document.querySelector("h1").innerHTML="Draw! ⚔";

}

