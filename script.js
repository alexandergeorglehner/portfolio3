const video = document.getElementById("video");
const button = document.getElementById("play-toggle");

let isPlaying = false;

button.onclick = function() {
  if (!isPlaying) {
    video.play();
    video.muted = false;
    button.innerText = "Pause";
    isPlaying = true;
  } else {
    video.pause();
    button.innerText = "Play";
    isPlaying = false;
  }
};
