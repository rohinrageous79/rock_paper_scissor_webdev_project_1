const rock= document.getElementById('rock');
const paper= document.getElementById('paper');
const scissor= document.getElementById('scissor');
const reset= document.getElementById('reset');
const result= document.getElementById('result');
const moves= document.getElementById('moves');
const userscore= document.getElementById('user-score');
const computerscore= document.getElementById('computer-score');

let userScore=0;
let computerScore=0;


rock.addEventListener('click',function(){
    const gameResult= playGame('rock')
    result.textContent= gameResult.result;
    moves.textContent= `You: Rock | Computer: ${gameResult.computerMove}`;

    if (gameResult.result==='you win'){
        userScore++;
    }else if(gameResult.result==='you lose'){
        computerScore++;
    }

    userscore.textContent= `User: ${userScore}`;
    computerscore.textContent=`Computer: ${computerScore}`;
})

paper.addEventListener('click',function(){
    const gameResult=playGame('paper')
    result.textContent= gameResult.result;
    moves.textContent= `You: Paper | Computer: ${gameResult.computerMove}`;

    if (gameResult.result==='you win'){
        userScore++;
    }else if(gameResult.result==='you lose'){
        computerScore++;
    }

    userscore.textContent= `User: ${userScore}`;
    computerscore.textContent=`Computer: ${computerScore}`;
})

scissor.addEventListener('click',function(){
    const gameResult=playGame('scissor')
    result.textContent= gameResult.result;
    moves.textContent= `You: Scissor | Computer: ${gameResult.computerMove}`;

    if (gameResult.result==='you win'){
        userScore++;
    }else if(gameResult.result==='you lose'){
        computerScore++;
    }

    userscore.textContent= `User: ${userScore}`;
    computerscore.textContent=`Computer: ${computerScore}`;
})

reset.addEventListener('click',function(){

    userScore=0;
    computerScore=0; 

    userscore.textContent=`User: ${userScore}`;
    computerscore.textContent= `Computer: ${computerScore}`;

    result.textContent=" Let's play";

    moves.textContent= "You: | Computer:";
})

const computerChoice= function(){
    let randomNum = Math.random();
    if (randomNum<1/3){
        return 'rock';
    }
    else if (randomNum>=1/3 && randomNum<=2/3){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}


function playGame(playerMove){
    const computerMove= computerChoice();
    if (playerMove===computerMove){
       return {
        result:'tie',
        computerMove: computerMove
    }}
    else if ((playerMove==='rock' && computerMove==='scissor')||
    (playerMove==='paper' && computerMove==='rock')|| 
    (playerMove==='scissor' && computerMove==='paper'))
    {
       return{
        result: 'you win',
        computerMove: computerMove
       } 
    }
    else{
       return {
        result: 'you lose',
        computerMove: computerMove
    }
}
}




