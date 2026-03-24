const video = document.getElementById("video");
const button = document.getElementById("sound-toggle");

let isMuted = true;

// 🔥 iOS Autoplay Fix (mehrere Trigger)
function forcePlay() {
  video.muted = true;
  video.play().catch(() => {});
}

// beim Laden
window.addEventListener("load", forcePlay);

// beim ersten Touch (wichtig für iOS)
document.addEventListener("touchstart", forcePlay, { once: true });

// 🔊 Sound Toggle
button.onclick = function() {
  if (isMuted) {
    video.muted = false;
    video.play();
    button.innerText = "Sound Off";
    isMuted = false;
  } else {
    video.muted = true;
    button.innerText = "Sound On";
    isMuted = true;
  }
};
