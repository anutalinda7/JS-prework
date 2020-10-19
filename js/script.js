function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let argButtonName,
	buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let computerMove,
   	randomNumber;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  if (randomNumber == '1') {
  	computerMove = 'kamień';
  } else if (randomNumber == '2') {
    computerMove = 'papier ';
  } else {
   computerMove = 'nożyce ';
  }
  printMessage('Mój ruch: ' + computerMove);

  let playerInput, playerMove;
  playerMove = argButtonName;
  console.log('Wpisana odpowiedź to: ' + playerInput);
  if (playerInput == '1') {
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier ';
  } else if (playerInput == '3') {
    playerMove = 'nożyce ';
  } else {
    printMessage('nieznany ruch');
    playerMove = 'kamień ';
  }
  printMessage('Twój ruch: ' + playerMove);

  let argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis! ');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = getMoveName(playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  Step JavaScript
  Run JavaScript
  Reset editor
  Program output:


}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });


buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik KAMIEŃ'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik PAPIER'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik NOŻYCE'); });





const computerMove; {
        computerMove = 'kamień';
        printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
        computerMove = 'papier ';
        printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce ');
}
function getSubtraction(a, b) {
  let result = a - b;

  if(result < 0){
    let multiplier = -1;
    result = result * multiplier;
  }

  return result;
}

console.log( getSubtraction(5, 7) );
