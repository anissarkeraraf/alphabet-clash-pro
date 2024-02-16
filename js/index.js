// function play(){
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection)

//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed)

    // stop the game if pressed "Esc"
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // // get the expected to press
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // // check matched or not
    // if(playerPressed === expectedAlphabet){
    //     console.log('you get a point');
    // }
    // else{
    //     console.log('you missed. you lost a life');
    // }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    // check right or wrong
    if(playerPressed === expectedAlphabet){
        console.log('Your get a point')
    
        const currentScore = getTextElementValueById('current-score')
        console.log(currentScore)
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
// ---------------------------------------------------
    //     const currentScoreElment = document.getElementById('current-score')
    //     const currentText = currentScoreElment.innerText;
    //     const currentScore = parseInt(currentText);
    //     console.log(currentText)

 

        // const newScore = currentScore + 1;
    //     currentScoreElment.innerText = newScore;const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }else{
        console.log('dhur miya.... Right key press koren')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


        if(updatedLife === 0){
            gameOver();

            // removeBackgroundColorById(expectedAlphabet)
            // continueGame();
        }

     
    }

}
// Capture keyboard key Press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabeta();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet);
}


function play(){
    // hide everything and show only the playground
    hiddenElementById('home-screen');
    hiddenElementById('final-score');
    showElementById('play-ground');

    // Reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}
function gameOver(){
    hiddenElementById('play-ground');
    showElementById('final-score');

    // Updated final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}