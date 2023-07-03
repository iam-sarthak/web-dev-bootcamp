var level = 0;
var cmpArr = [];
var userarr = [];
var index = 0;
var usri;
var gamestate = false;

document.addEventListener("keypress", function () {
  if (!gamestate) {
    
  
  gamestate = true;
  cmpturn();}
});

$(".btn").click(function (e) {
  var btnclicked = e.currentTarget;
  userarr.push(btnclicked.id);
  pressSound(btnclicked.id);
  pressAnnimation(btnclicked.id);
  checkres(userarr.length - 1);
});

function checkres(current) {
  if (cmpArr[current] === userarr[current]) {
    if (userarr.length === cmpArr.length) {
      setTimeout(function () {
        cmpturn();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    gameover();
  }
}

function gameover() {
  level = 0;
  cmpArr = [];
  gamestate = false;
}
function cmpturn() {
  level++;
  $("#level-title").text("Level: "+ level);
  userarr = [];
  console.log("in cmp");
  cmpbtn = Math.floor(Math.random() * 4 + 1);
  switch (cmpbtn) {
    case 1:
      cmpArr.push("green");
      pressSound("green");
      pressAnnimation("green");
      break;
    case 2:
      cmpArr.push("blue");
      pressSound("blue");
      pressAnnimation("blue");
      break;
    case 3:
      cmpArr.push("red");
      pressSound("red");
      pressAnnimation("red");
      break;
    case 4:
      cmpArr.push("yellow");
      pressSound("yellow");
      pressAnnimation("yellow");
      break;
    default:
      break;
  }
}

function userturn(pKey) {}

function pressAnnimation(pKeyid) {
  document.getElementById(pKeyid).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(pKeyid).classList.remove("pressed");
  }, 100);
}

function pressSound(pKeyid) {
  switch (pKeyid) {
    case "green":
      var sound = new Audio("sounds/green.mp3");
      sound.play();
      break;
    case "blue":
      var sound = new Audio("sounds/blue.mp3");
      sound.play();
      break;
    case "red":
      var sound = new Audio("sounds/red.mp3");
      sound.play();
      break;
    case "yellow":
      var sound = new Audio("sounds/yellow.mp3");
      sound.play();
      break;
    default:
      break;
  }
}
