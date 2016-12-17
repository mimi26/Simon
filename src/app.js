//GLOBALS==============================================
const start = document.querySelector('button');
const redDiv = document.querySelector('#red');
const blueDiv = document.querySelector('#blue');
const greenDiv = document.querySelector('#green');
const yellowDiv = document.querySelector('#yellow');
const colorDivs = $('.color');

let colors = [redDiv, blueDiv, greenDiv, yellowDiv];
let roundNum = 0;
let userClicks = 0;
let shown = [];
let clickedColors = [];
//END GLOBALS==============================================

$('button').click(function() {
  play();
  // }
})

const sequence = ['red', 'blue', 'green', 'red', 'red', 'yellow', 'blue'];


function play() {
  console.log('PLAY>>>>>>>>>>>>>')
  for (let j = 0; j <= roundNum; j++) {
    shown.push(sequence[j]);
    console.log('shown: ', shown);
    blinkSequence()
  }
  pushResponse();
}

function blinkSequence() {
  for (i = 0; i < shown.length; i++) {
  if (shown[i] === 'red') {

    setTimeout(blinkRed, (i + .5 )* 800);
    console.log('shown[i]red:', i);

    } else if (shown[i] === 'blue')  {
      setTimeout(blinkBlue, i * 800)
      console.log('shown[i]blue:', i);

    } else if (shown[i] === 'green') {

    setTimeout(blinkGreen, i * 800)
    console.log('shown[i]green:', i);

    } else if (shown[i] === 'yellow') {
      setTimeout(blinkYellow, i * 800)
      console.log('shown[i]yellow:', i);
    }
  }
}

function pushResponse() {

  if (roundNum > 0) return; //keep event listeners from being reset after first round.

  for (let i = 0; i < colorDivs.length; i++) {

    colorDivs[i].addEventListener('click', function() {
      if (colorDivs[i] === redDiv) {
        blinkRed();
        clickedColors.push('red');
        userClicks++;
        checkResponse();
      } else if (colorDivs[i] === blueDiv) {
        blinkBlue();
        clickedColors.push('blue');
        userClicks++;
        checkResponse();
      } else if (colorDivs[i] === greenDiv) {
        blinkGreen();
        clickedColors.push('green');
        userClicks++;
        checkResponse();
      } else if (colorDivs[i] === yellowDiv) {
        blinkYellow();
        clickedColors.push('yellow');
        userClicks++;
        checkResponse();
      }

    })
  }
}


function checkResponse() {
  let userSuccess;
  console.log("clickedColors: ", clickedColors);
  console.log('shown: ', shown);
  for (let i = 0; i < shown.length; i++) {
    console.log('shown[i]:', shown[i]);
    console.log('clickedColors[i]:', clickedColors[i]);

    if (shown[i] !== clickedColors[i] && userClicks === shown.length) {

      console.log("game over")
      userSuccess = false;

    } else if (userSuccess = true) {

      console.log('successfully compared');

    }
  }
  if (userSuccess === true && userClicks === shown.length) {

    roundNum++;
    clickedColors = [];
    shown = [];
    userClicks = 0;

    play();

  }
}

const points = 0; //to start;

function blinkRed() {
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
