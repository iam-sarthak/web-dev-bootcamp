for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  const element = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function () {
      var btnClick = this.innerHTML;
      plSound(btnClick);
      addingAnimation(btnClick);
    });
}

document.addEventListener("keydown", function(event) {
    plSound(event.key);
    addingAnimation(event.key);
})

function plSound(keyy) {
    switch (keyy) {
        case "w":
            var crach = new Audio("sounds/crash.mp3");
            crach.play();
          break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
          break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
          break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;
        default:
          break;
      }
}

function addingAnimation(keypp) {
    var avtButton = document.querySelector("."+keypp);
    avtButton.classList.toggle("pressed");
    setTimeout(function () {
        avtButton.classList.toggle("pressed");
    }, 100);

}