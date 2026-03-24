const video = document.getElementById("video");
const button = document.getElementById("sound-toggle");

let isMuted = true;

button.onclick = function() {
  if (isMuted) {
    video.muted = false;
    button.innerText = "Sound Off";
    isMuted = false;
  } else {
    video.muted = true;
    button.innerText = "Sound On";
    isMuted = true;
  }
};
