'use strict';

const score=document.querySelector(".score");
// const highscore=document.querySelector(".highscore");
const guess=document.querySelector(".guess");
const check=document.querySelector(".check");
const message=document.querySelector(".message");
const number=document.querySelector(".number");
const again=document.querySelector(".again");

let secretNumber=Math.floor(Math.random()*20)+1;
let scores=20;
let highScore=0;
// score.innerHTML=Number(20);

 

check.addEventListener("click", function () {

    if(!guess.value){
        message.innerHTML="⛔No Number!"
    }
   else if(Number(guess.value) === secretNumber){
        message.innerHTML="🎉Correct Guess";
        document.querySelector("body").style.backgroundColor="green";
        number.innerHTML=secretNumber;
        number.style.width="30rem";

if(scores> highScore){
    highScore=scores;
    document.querySelector(".highscore").innerHTML=highScore;
}

    }
    else if(Number(guess.value)!== secretNumber){   

        if(scores>0){
            message.innerHTML=Number(guess.value) > secretNumber? "📈 Too High":"📉 Too Low";
            scores--;
            score.innerHTML=scores;
        }else{
            message.innerHTML="💥 You Lost the game!";
            score.innerHTML=0;
            document.querySelector("body").style.backgroundColor="red";
        }

    }
    // else if(secretNumber < Number(guess.value)){

    //     if(scores>0){
    //     message.innerHTML="📈 To High";
    //     scores--;
    //     score.innerHTML=scores;
    // }else{
    //     message.innerHTML="💥 You Lost the game!";
    //     score.innerHTML=0;
    //     document.querySelector("body").style.backgroundColor="red";
    // }

    // }
    // else if(secretNumber > Number(guess.value)){

    //     if(scores>0){
    //         message.innerHTML="📉 You Loose";
    //     scores--;
    //     score.innerHTML=scores;
    //     }else{
    //         message.innerHTML="💥 You Lost the game!";
    //         score.innerHTML=0;
    //         document.querySelector("body").style.backgroundColor="red";
    //     }
    // }
    else{
        message.innerHTML="Something Wrong happen";
        
    }
})

again.addEventListener("click", function () {

   secretNumber=Math.floor(Math.random()*20)+1;
   scores=20;
    
    message.innerHTML="Start guessing...";
    score.innerHTML=20;
    guess.value="";
    number.innerHTML="?";
    document.querySelector("body").style.backgroundColor="#222222";
    number.style.width="15rem";

    console.log(secretNumber);
} );

// console.log(secretNumber);