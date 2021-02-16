// an idea to make mini game with images 

// first we should check if user provided correct data

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else if(userInput === 'bomb'){
    return userInput;
  }else{
    console.log("You should provide correct data");
  }
};
// next we need to get data from computer
const getComputerChoice = function(){
  let num = Math.floor(Math.random()*3);
  switch (num){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
// compare user and computer choices
const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice === computerChoice){
    return console.log('Game is a tie')
}; 
  if (userChoice === 'rock'){
    computerChoice === 'paper' ? console.log('Computer has won') : console.log('User has won');
};
  if (userChoice === 'paper'){
    computerChoice === 'rock' ? console.log('User has won') : console.log('Computer has won');
};
  if (userChoice === 'scissors'){
    computerChoice === 'rock' ? console.log('Computer has won') : console.log('User has won');
};
  if (userChoice === 'bomb'){
  console.log('User has won');
};
};

function playGame(){
  let userChoice = getUserChoice('rock');
  console.log('User ' + userChoice);
  let computerChoice = getComputerChoice();
  console.log("Computer " + computerChoice);
  determineWinner(userChoice, computerChoice);
}
playGame()
// fjejrjej