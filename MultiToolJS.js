/********************************Stopwatch Var********************************/
var StopwatchTime = 0;
var StopwatchTimer;
var StopwatchIsRunning = false;
/********************************End Stopwatch Var, Start Countdown Var********************************/
var CountdownTime = 1;
var CountdownTimer;
var CountdownIsRunning = false;
var ChosenCountdownTime;
/********************************End Countdown Var********************************/
/********************************Tally Var********************************/
var TallySize = 0;
/********************************End Tally Var********************************/
/********************************CPS Var********************************/
var CPSAnswer;
var CPSClicks = 0;
var CPSTimer = "Press Start to start the test.";
var CPSIsRunning = false;
var CPSGetReady1;
var CPSPrepareTimer1;
var CPSPrepareTimer2;
var CPSPrepareTimer3;
var CPSTimerIs10;
var CPSTimerIs9;
var CPSTimerIs8;
var CPSTimerIs7;
var CPSTimerIs6;
var CPSTimerIs5;
var CPSTimerIs4;
var CPSTimerIs3;
var CPSTimerIs2;
var CPSTimerIs1;
/********************************End CPS Var********************************/
/********************************SplashText Var********************************/
var SplashTextDetermine = Math.floor((Math.random() * 2) + 1);
console.log(SplashTextDetermine);
/********************************End SplashText Var********************************/
// Timermode 1 is Stopwatch, Timermode 2 is Countdown, Timermode 3 is Tally, Timermode 4 is CPS Test.
var TimerMode = 1;
window.onload = Startup;

/*******************************Swap to different modes*******************************/
function ChangeToStopwatch() {
  HideCountdown();
  ShowStopwatch();
  HideTally();
  HideCPS();
  TimerMode = 2;
  GlobalReset();
}

function ChangeToCountdown() {
  HideTally();
  ShowCountdown();
  HideStopwatch();
  HideCPS();
  TimerMode = 3;
  GlobalReset();
}

function ChangeToTally() {
  HideStopwatch();
  HideCountdown();
  ShowTally();
  HideCPS();
  TimerMode = 4;
  GlobalReset();
}

function ChangeToCPS() {
  ShowCPS();
  HideStopwatch();
  HideTally();
  HideCountdown();
  TimerMode = 1;
  GlobalReset();
}

/******************************* End swap to different modes*******************************/
/******************************* swap to different modes functions*******************************/
function GlobalReset() {
  TallyReset();
  StopwatchReset();
  CountdownReset();
  CPSReset();
}
$("#SwapToStopwatch").prop("disabled", true);

function ShowStopwatch() {
  document.getElementById("Title").innerHTML = "Stopwatch!";
  $('#StopwatchButtons').css('display', 'flex');
  $('#StopwatchVar').css('display', 'block');
  $("#SwapToStopwatch").prop("disabled", true);
}

function ShowCountdown() {
  document.getElementById("Title").innerHTML = "Countdown!";
  $('#CountdownButtons').css('display', 'flex');
  $('#CountdownVar').css('display', 'block');
  $('#CountdownTextbox').css('display', 'block');
  $("#SwapToCountdown").prop("disabled", true);
}

function ShowTally() {
  document.getElementById("Title").innerHTML = "Tally!";
  $('#TallyButtons').css('display', 'flex');
  $('#TallyVar').css('display', 'block');
  $("#SwapToTally").prop("disabled", true);
}

function ShowCPS() {
  document.getElementById("Title").innerHTML = "CPS Test!";
  $('#CPSButtons').css('display', 'flex');
  $('#CPSVar').css('display', 'block');
  $('#CPSClick').css('display', 'none');
  $('#CPSReset').css('display', 'none');
  $("#SwapToCPS").prop("disabled", true);
}

function HideStopwatch() {
  $('#StopwatchButtons').css('display', 'none');
  $('#StopwatchVar').css('display', 'none');
  $("#SwapToStopwatch").prop("disabled", false);
}

function HideCountdown() {
  $('#CountdownButtons').css('display', 'none');
  $('#CountdownVar').css('display', 'none');
  $('#CountdownTextbox').css('display', 'none');
  $("#SwapToCountdown").prop("disabled", false);
}

function HideTally() {
  $('#TallyButtons').css('display', 'none');
  $('#TallyVar').css('display', 'none');
  $("#SwapToTally").prop("disabled", false);
}

function HideCPS() {
  $('#CPSButtons').css('display', 'none');
  $('#CPSVar').css('display', 'none');
  $("#SwapToCPS").prop("disabled", false);
}

/******************************* end swap to different modes functions*******************************/
/*************************************Stopwatch*************************************/
function StopwatchStart() {
  if (StopwatchIsRunning == false) {
    StopwatchIsRunning = true
    StopwatchTimer = setInterval(function() {
      StopwatchTime += 0.01;
      document.getElementById("StopwatchVar").innerHTML = parseFloat(Math.round(StopwatchTime * 100) / 100).toFixed(2)
    }, 10);
  }
}


function StopwatchReset() {
  StopwatchIsRunning = false;
  clearInterval(StopwatchTimer);
  StopwatchTime = 0;
  document.getElementById("StopwatchVar").innerHTML = 0;
}

function StopwatchStop() {
  StopwatchIsRunning = false;
  clearInterval(StopwatchTimer);
}
/**********************************End Stopwatch*************************************/

/*************************************Countdown*************************************/
function CountdownStart() {
  if (CountdownIsRunning == false) {
    CountdownIsRunning = true
    CountdownTimer = setInterval(function() {
      CountdownTime -= 0.01;
      document.getElementById("CountdownVar").innerHTML = parseFloat(Math.round(CountdownTime * 100) / 100).toFixed(2)
      if (CountdownTime < 0) {
        document.getElementById("CountdownVar").innerHTML = 0;
        CountdownReset()
        $('#CountdownText').css('display', 'block');
        setTimeout(CountdownAlertHide, 3000);
      }
    }, 10);
  }
}


function CountdownReset() {
  CountdownIsRunning = false;
  clearInterval(CountdownTimer);
  CountdownTime = document.getElementById("CountdownBoxTime").value;
  if (!CountdownTime) {
    CountdownTime = 0
  }
  document.getElementById("CountdownVar").innerHTML = CountdownTime;
}

function CountdownStop() {
  CountdownIsRunning = false;
  clearInterval(CountdownTimer);
}

function CountdownSetTime() {
  ChosenCountdownTime = document.getElementById("CountdownBoxTime").value;
  CountdownTime = document.getElementById("CountdownBoxTime").value;
  document.getElementById("CountdownVar").innerHTML = CountdownTime;
  CountdownIsRunning = false;
  clearInterval(CountdownTimer);
}

function CountdownAlertHide() {
  $('#CountdownText').css('display', 'none');
}

/**********************************End Countdown*************************************/
/**********************************Start Tally*************************************/
function TallyIncrease() {
  TallySize += 1
  document.getElementById("TallyVar").innerHTML = TallySize;
}

function TallyDecrease() {
  TallySize -= 1;
  document.getElementById("TallyVar").innerHTML = TallySize;
}

function TallyReset() {
  TallySize = 0;
  document.getElementById("TallyVar").innerHTML = TallySize;
}



/**********************************End Tally*************************************/
/**********************************Start CPS*************************************/
function UpdateCPSTimer() {
  document.getElementById("CPSVar").innerHTML = CPSTimer;
}

function CPSStart() {
  //CPSTimer = "Ready...";
  //UpdateCPSTimer();
  $('#CPSStart').css('display', 'none');
  console.log("CPSStart Works")
  CPSGetReady = document.getElementById("CPSVar");
  $('#CPSClick').css('display', 'flex');
  $('#CPSReset').css('display', 'block');
  CPSPrepareTimer1 = setTimeout(function() {
    $("#CPSClick").prop("disabled", true);
    CPSGetReady.innerHTML = "Ready..."
  }, 0);
  CPSPrepareTimer2 = setTimeout(function() {
    CPSGetReady.innerHTML = "Set..."
  }, 2000);
  CPSPrepareTimer3 = setTimeout(function() {
    CPSGetReady.innerHTML = "Go!"
    $("#CPSClick").prop("disabled", false);
    CPSIsRunning = true
  }, 4000);
  CPSTimerIs10 = setTimeout(function() {
    CPSGetReady.innerHTML = "10"
  }, 5000);
  CPSTimerIs9 = setTimeout(function() {
    CPSGetReady.innerHTML = "9"
  }, 6000);
  CPSTimerIs8 = setTimeout(function() {
    CPSGetReady.innerHTML = "8"
  }, 7000);
  CPSTimerIs7 = setTimeout(function() {
    CPSGetReady.innerHTML = "7"
  }, 8000);
  CPSTimerIs6 = setTimeout(function() {
    CPSGetReady.innerHTML = "6"
  }, 9000);
  CPSTimerIs5 = setTimeout(function() {
    CPSGetReady.innerHTML = "5"
  }, 10000);
  CPSTimerIs4 = setTimeout(function() {
    CPSGetReady.innerHTML = "4"
  }, 11000);
  CPSTimerIs3 = setTimeout(function() {
    CPSGetReady.innerHTML = "3"
  }, 12000);
  CPSTimerIs2 = setTimeout(function() {
    CPSGetReady.innerHTML = "2"
  }, 13000);
  CPSTimerIs1 = setTimeout(function() {
    CPSGetReady.innerHTML = "1"
  }, 14000);
  CPSPrep = setTimeout(function() {
    CPSGetReady.innerHTML = "Done!"
    CPSIsRunning = false
    CPSAnswer = CPSClicks / 10;
    document.getElementById("CPSEnd").innerHTML = "Your CPS Is: " + CPSAnswer;
    $('#CPSText').css('display', 'block');
    $("#CPSClick").prop("disabled", true);
    console.log(CPSAnswer)
  }, 15000);



  //CPSIsRunning = false
}

function CPSReset() {
  CPSResetHelp();
  CPSClicks = 0;
  CPSTimer = "Press Start to start the test.";
  UpdateCPSTimer();
  $('#CPSClick').css('display', 'none');
  $('#CPSReset').css('display', 'none');
  $('#CPSStart').css('display', 'block');
  $('#CPSText').css('display', 'none');
  $("#CPSClick").prop("disabled", false);
  CPSIsRunning = false
}

function CPSClick() {
  if (CPSIsRunning == true) {
    CPSClicks += 1
  }
}

function CPSResetHelp() {
  clearTimeout(CPSPrepareTimer1);
  clearTimeout(CPSPrepareTimer2);
  clearTimeout(CPSPrepareTimer3);
  clearTimeout(CPSTimerIs10);
  clearTimeout(CPSTimerIs9);
  clearTimeout(CPSTimerIs8);
  clearTimeout(CPSTimerIs7);
  clearTimeout(CPSTimerIs6);
  clearTimeout(CPSTimerIs5);
  clearTimeout(CPSTimerIs4);
  clearTimeout(CPSTimerIs3);
  clearTimeout(CPSTimerIs2);
  clearTimeout(CPSTimerIs1);
  clearTimeout(CPSPrep);
}



/**********************************End CPS*************************************/
/**********************************SplashText Content*************************************/

/*
function ChangeSplashText() {
  if (SplashTextDetermine == 1) {
    document.getElementById("SplashText").innerHTML = "MultiTool: " + "Oh noes! You has an error!";
  } else if (SplashTextDetermine == 2) {
    document.getElementById("SplashText").innerHTML = "MultiTool: " + "A great app!";
  } else {
    console.log("SplashTextDetermine is not working, (That's Not 	Good, go message the dev, And im serious.)");
  }
}
*/


/**********************************End SplashText Content*************************************/
/**********************************Startup Content*************************************/
function Startup() {
  console.log("startup");
  document.getElementById("StopwatchVar").innerHTML = 0;
  document.getElementById("CountdownVar").innerHTML = 3;
  document.getElementById("TallyVar").innerHTML = 0;
  document.getElementById("CPSVar").innerHTML = 0;
  //ChangeSplashText()
  setInterval(function() {
    $('body').css('background', getRandomColor());
  }, 2000);
  $('#CountdownButtons').css('display', 'none');
  $('#CountdownVar').css('display', 'none');
  $('#CountdownText').css('display', 'none');
  $('#TallyButtons').css('display', 'none');
  $('#TallyVar').css('display', 'none');
  $('#CPSButtons').css('display', 'none');
  $('#CPSVar').css('display', 'none');
  $('#CPSText').css('display', 'none');
  $("#SwapToStopwatch").prop("disabled", true);
}

function getRandomColor() {
  var letters = '012345678ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**********************************End Startup Content*************************************/
function LiterallyNothing() {
  console.log("Oh Hi Dere");
}
