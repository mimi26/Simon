
//GLOBALS==============================================
const start = document.querySelector('button');
const redDiv = document.querySelector('#red');
const blueDiv = document.querySelector('#blue');
const greenDiv = document.querySelector('#green');
const yellowDiv = document.querySelector('#yellow');
const colorDivs = $('.color');

let colors = [redDiv, blueDiv, greenDiv, yellowDiv];
//END GLOBALS==============================================









//const colors = [$('.red-lit'), $('.blue-lit'), $('.green-lit'), $('.yellow-lit')];
//listen for start click
$('button').click(function() {

  //start game

  //display sequence of colors randomly generated equal to round number
// for (let i = 1; i <= roundNum; i++) {
//const randColor = Math.floor((Math.random() * colors.length));
//return randColor;
play();
// }
})

//start sequence
//track which round number up to.




//generate random color from colors array. seems to work.
//const randColor = Math.floor((Math.random() * colors.length));

//round is 0 before anything happens. each time roundNum increments, another
//color is added to sequence.

//user clicks start, calls showSequence
//first round:
let roundNum = 0;
let userClicks = 0;
let shown = []; // colors simon shows
let clickedColors = [];


// function firstRound() {
//   const sequence = ['red'] //, 'blue', 'green', 'red', 'red', 'yellow', 'blue'];
//   blinkRed();
//   shown.push('red');
// console.log(shown);
// console.log('click colors to repeat sequence')
//   pushResponse();

//   }

// for (let i = 0; i < sequence.length; i++) {
//   if (sequence[i] === 'red') {
//     blinkRed();
//   } else if (sequence[i] === 'blue') {
//     blinkBlue();
//   } else if (sequence[i] === 'green') {
//     blinkGreen();
//   } else if (sequence[i] === 'yellow') {
//     blinkYellow();
//     }
//   }
 const sequence = ['red', 'blue', 'green', 'red', 'red', 'yellow', 'blue'];

  function play() {
  for (let j = 0; j <=  roundNum; j++) {
  shown.push(sequence[j]);
  console.log("this is the current contents of shown array: ", shown);
 }

console.log('click colors to repeat sequence')
  pushResponse();
  console.log('this is shown.length: ', shown.length);
  console.log('userClicks', userClicks);
  // if (userClicks === shown.length) {
  //   play ();
  // }
}

// function showSequence() {
// const sequence = ['red', 'blue', 'green', 'red', 'red', 'yellow', 'blue'];
//   let shown = [];
// let roundNum = 0;
// for (let i = 0 ; i < sequence.length; i++) {
//    shown.push(sequence[i]);
// }
// if (roundNum === shown.length) {

// }





//how to go into second round? recurse?
//firstRound()

  function pushResponse() {

    if(roundNum > 0) return;

    for (let i=0;i<colorDivs.length;i++) {

      colorDivs[i].addEventListener('click', function() {
        if (colorDivs[i] === redDiv) {
          console.log("you clicked red!")
          blinkRed();
          clickedColors.push('red');
          userClicks++;
          console.log('clickedColors: ',
            clickedColors);
          checkResponse();

        } else if (colorDivs[i] === blueDiv) {
          console.log("you clicked blue!")
          blinkBlue();
          clickedColors.push('blue');
          userClicks++;
          console.log('clickedColors:',clickedColors);
          checkResponse();

        } else if (colorDivs[i] === greenDiv) {
          console.log("you clicked green!")
          blinkGreen();
          clickedColors.push('green');
          userClicks++;
          checkResponse();
          console.log(clickedColors);
        } else if (colorDivs[i] === yellowDiv) {
          console.log("you clicked yellow!")
          blinkYellow();
          clickedColors.push('yellow');
          userClicks++;
          checkResponse();
          console.log(clickedColors);
        }

      })
    }
  }


  function checkResponse() {
    let userSuccess;
    console.log("clickedColors: ", clickedColors);
    console.log('shown: ', shown);
    for (let i = 0; i < shown.length; i++) {
      console.log('shown[i]:',shown[i]);
      console.log('clickedColors[i]:',clickedColors[i]);

      if (shown[i] !== clickedColors[i] && userClicks===shown.length) {

        console.log("game over")
        userSuccess = false;

      } else if (userSuccess = true) {

        console.log('successfully comapred');

    }
    console.log('userClicks: ', userClicks);
    console.log('roundNum: ', roundNum);
  }
  if (userSuccess === true && userClicks===shown.length) {
    roundNum ++;
    console.log('roundNum: ', roundNum);
    clickedColors = [];
    console.log('clickedColors post clearing: ', clickedColors);
    shown = [];
    userClicks = 0;
    console.log('shown post clearing: ', shown);

    play();

  }


}





//user clicks:
//calls checkResponse.
//results in array clickedColors


//if (clickedColors === sequence) {


//showSequence();
  //shown.length === roundNum


//after sequence is shown, wait for user input.
//create an array of user clicks.
//check if userArr === shown? round++ else game over.

//function to push 'something' into user response array
//tested, works




//   //pick color from array at random
//   //random color:
// colors[Math.floor((Math.random()*colors.length))];


// //pick a random color out of the 4.
//Math.floor((Math.random()*colors.length));


//toggle class of color divs one at a time. on and then off.



//listen for user input sequence of clicks
//determine if it matches shown sequence
//declare if lost
//$('#message').html(`Sorry, you lost. Try again.`);
//point++ if correct

const points = 0; //to start;
//show another sequence += 1 additional color


start.addEventListener('click', function () {
  //start game
  //call game function
})




//4 blink function to make each color blink on and off.
//maybe change the intervals to make faster?
//one function blink with parameter.


function blinkRed () {
  setTimeout(function lightUp() {
    $('#red').toggleClass('red-lit');
  }, 200);

  setTimeout(function lightOff() {
    $('#red').toggleClass('red-lit');
  }, 600);
}


function blinkBlue() {
setTimeout(function lightUp() {
  $('#blue').toggleClass('blue-lit');

}, 200);

setTimeout(function lightOff() {
  $('#blue').toggleClass('blue-lit');

}, 600);
}

function blinkGreen() {
setTimeout(function lightUp() {
  $('#green').toggleClass('green-lit');

}, 200);

setTimeout(function lightOff() {
  $('#green').toggleClass('green-lit');

}, 600);
}

function blinkYellow() {
setTimeout(function lightUp() {
  $('#yellow').toggleClass('yellow-lit');

}, 200);

setTimeout(function lightOff() {
  $('#yellow').toggleClass('yellow-lit');

}, 600);
}



// setInterval(function testLight() {
//   $('#red').css('backgroundColor', 'rgba(255,0,0, .5)') ? $('#red').css('backgroundColor', 'rgba(255, 0, 0, 1)') :
//   $('#red').css('backgroundColor', 'rgba(255, 0, 0, .5)');
// }, 1000);





