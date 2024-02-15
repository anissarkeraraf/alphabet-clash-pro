// function play(){
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection)

//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabeta();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}