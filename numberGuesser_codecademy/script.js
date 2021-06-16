let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//secret target generator
const generateTarget = () =>{
	let targetNumber = Math.floor(Math.random()*9);
	return targetNumber;
};

const compareGuesses = (user, computer, target) => {
	
	let differenceUser = target - user;
	let differenceComputer = target - computer;
	
	if (Math.abs(differenceUser) === Math.abs(differenceComputer)){
		return true;
	}else if(Math.abs(differenceUser) < Math.abs(differenceComputer)){
		return true;
	}else {
		return false;
	}
};

const updateScore = winner => {
	if (winner = true){
		humanScore += 1;
	}else{
		computerScore +=1;
	}
};

const advanceRound = () => {
	currentRoundNumber +=1;
};