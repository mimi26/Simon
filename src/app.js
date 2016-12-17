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

const sequence = ['red', 'blue', 'green', 'yellow'];

let simonBlinks;
function play() {
  console.log('PLAY>>>>>>>>>>>>>')
  for (let j = 0; j <= roundNum; j++) {
    shown.push(sequence[j]);
    console.log('shown: ', shown);

    simonBlinks = setTimeout(blinkSequence, 1000);

  }
  pushResponse();
}

// $('#red').on('click', function redBlink() {
//   $('#red').addClass('red-lit');
//   console.log('class removed');
//   $('#red').removeClass('red-lit');
// })
let redLight;
let blueLight;
let greenLight;
let yellowLight;
function blinkSequence() {
  for (i = 0; i < shown.length; i++) {
  if (shown[i] === 'red') {
    window.clearTimeout(redLight);
    redLight = setTimeout(function () {

      $('#red').addClass('red-lit');
      console.log('red class added');
      setTimeout(function () {
    $('#red').removeClass('red-lit');
  }, 400);
      console.log('red class removed')
    }, i * 800);


    } else if (shown[i] === 'blue')  {
      window.clearTimeout(blueLight);
      blueLight = setTimeout(function () {

      $('#blue').addClass('blue-lit');
      console.log('blue class added');
      setTimeout(function () {
    $('#blue').removeClass('blue-lit');
  }, 400);
      console.log('blue class removed')
    }, i * 800)


    } else if (shown[i] === 'green') {
      window.clearTimeout(greenLight);
      greenLight = setTimeout(function () {

      $('#green').addClass('green-lit');
      console.log('green class added');
      setTimeout(function () {
    $('#green').removeClass('green-lit');
  }, 400);
      console.log('green class removed');
    }, i * 800)


    } else if (shown[i] === 'yellow') {
       window.clearTimeout(yellowLight);
    yellowLight = setTimeout(function () {

      $('#yellow').addClass('yellow-lit');
      console.log('yellow class added');
      setTimeout(function () {
    $('#yellow').removeClass('yellow-lit');
  }, 400);
      console.log('yellow class removed')
    }, i * 800);
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
