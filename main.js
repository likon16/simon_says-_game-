let gameSeq = [];
let userSeq  = [];

let btns = ["btn1", "btn2", "btn3", "btn4"]


let started = false;
let level = 0 ;

let highScore = 0;
let highScoreDisplay = document.querySelector(".high-score");

let h2 = document.querySelector('h2');


document.addEventListener('keypress',function(){
    if( started == false){
        console.log("Game Started");
        started = true;
      
        levelUp();
    }
});




function gameFlash(btn){
   
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash');

    },150)
}



function userFlash(btn){
   
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove('userflash');

    },150)
}




function levelUp(){
    userSeq =[];
    level++;
    h2.innerText =`Level : ${level}`
    let randIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
    gameFlash(randBtn);


    if(level > highScore){
        highScore = level;
        highScoreDisplay.innerText = `High Score :  ${highScore*10}`;
    }

}

// function lvlMul(){
    // let score = (level+1)*10;
    // score.innerText(`Your Score : ${score}`)
// }


function matchSequence() {
    let currentIndex = userSeq.length - 1;


    

    if (userSeq[currentIndex] !== gameSeq[currentIndex]) {
        console.log("Wrong! Game Over !");
        document.querySelector('body').style.backgroundColor = "red";
       
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "antiquewhite";
        },100);
        h2.innerHTML = `Game Over! Press Any Key to Reset !`;
        let userScore = document.querySelector('.user-score');
        userScore.innerHTML = `<b>Your Score : ${level*10}</b>`
      

        // reSetscore();
        resetGame();
        return;
    }


// function resetScore(){
//     return level - userScore();
// }


    if (userSeq.length === gameSeq.length) {
        console.log(" Level Up");
let userScore = document.querySelector('.user-score');
        userScore.innerHTML = `<b>Your Score : ${level*10}</b>`
        setTimeout(levelUp,1000);
       
    }
}



function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.classList[0];
    userSeq.push(userColor);
    console.log("User Sequence:", userSeq);
    matchSequence();
}


let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
   
}



function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

