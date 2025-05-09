'use strict';
/* console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = " 🎉correct number";
 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent =10;
 document.querySelector('.guess').value =23;
 console.log(document.querySelector('.guess').value); */

let secretnumber =Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore =0;
document.querySelector('.check').addEventListener('click',function(){
const guess = Number( document.querySelector('.guess').value);
console.log(guess , typeof guess);

//when there is no input
if(!guess){
    document.querySelector('.message').textContent = "    🚫no number ";
    }

//when the player wins
    else if(guess==secretnumber){
        document.querySelector('.message').textContent = " 🎉correct number";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width ='16rem';
        document.querySelector('.number').textContent = secretnumber ;
        if(score>highscore){
        highscore=score;
            document.querySelector('.Highscore').textContent = highscore;
        }
    }
    //when player loose
    else if(guess!==secretnumber){
        if(score>1){
        document.querySelector('.message').textContent = guess>secretnumber ? " 📈 too high":"  too low📉📉📉";
        score--;
        document.querySelector('.score').textContent =score;
    
        } else{
       document.querySelector('.message').textContent = "you lost the game😒";
            document.querySelector('.score').textContent = 0;
}
    }

//when the output is too high
       /* else if(guess>secretnumber){
        if(score>1){
        document.querySelector('.message').textContent = "  📈 too high";
        score--;
        document.querySelector('.score').textContent =score;
    
        } else{
       document.querySelector('.message').textContent = "you lost the game😒";
            document.querySelector('.score').textContent = 0;
}  }

//when the output is too low
       else if(guess<secretnumber){
        if(score>1){
        document.querySelector('.message').textContent = "  too low📉📉📉";
        score--;
        document.querySelector('.score').textContent =score;
    
        } else{
       document.querySelector('.message').textContent = "you lost the game😒";
            document.querySelector('.score').textContent = 0;
} }*/
        });

        document.querySelector('.again').addEventListener('click',function(){
        secretnumber =Math.trunc(Math.random()*20)+1;
        score = 20;
        document.querySelector('.message').textContent = "start guessing...";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?' ;
        document.querySelector('.guess').value = '' ;
 document.querySelector('body').style.backgroundColor = '#222';
 document.querySelector('.number').style.width ='8rem';

        }
    ) 