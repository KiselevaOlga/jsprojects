let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
    let num = Math.floor(Math.random()*10);
    return num 
}

const compareGuesses = (human, comp, target)=>{
    if (human < 0 || human > 9){
        return alert('Your guess is out of range!')
    }
    let human2 = Math.abs(human-target);
    let comp2 = Math.abs(comp-target);
    if (human2 === comp2){
        return true;
    }else if (human2 < comp2){
        return true;
    }else if(comp2 < human2){
        return false;
    }
}
function updateScore(scoreTo){
    if (scoreTo === 'human'){
        humanScore ++;
    }else{
        computerScore++;
};
}

function advanceRound(){
    currentRoundNumber++;
}
