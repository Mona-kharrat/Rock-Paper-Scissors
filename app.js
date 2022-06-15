const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
let computerChoice
let userChoice
let result

for(var i = 0; i < buttons.length; i++)
{
    //console.log(buttons[i])
    buttons[i].onclick = buttonClick;
}


function buttonClick(e)
{
    const target = e.target
    console.log('click  target id',target.id)
    userChoiceDisplay.innerHTML = target.id
    computerChoices()
    getResult()
}
//exemple
const sayHello = function(name) {
    console.log('hello', name);
}

const sayHello_ = (x) => console.log('hello', x);

sayHello('mouna');
sayHello_('mouna_');
//fin exemple
function computerChoices() {
    const randomNumber = Math.floor(Math.random()*3)+1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice
    
}
function getResult(){
    if (computerChoice === userChoice){
        result ='draw'
      }
    if (computerChoice === 'rock' && userChoice === 'paper'){
      result ='win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
      result ='lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
      result ='win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
      result ='lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
      result ='lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
      result ='win '
    }
    resultDisplay.innerHTML = result
}
