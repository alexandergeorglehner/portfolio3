const video = document.getElementById("video");
const button = document.getElementById("sound-toggle");

let isMuted = true;

// 🔥 iOS Autoplay Fix
function forcePlay() {
  if (!video) return;

  video.muted = true;
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

// beim Laden
window.addEventListener("load", forcePlay);

// beim ersten Touch (iOS Hack)
document.addEventListener("touchstart", forcePlay, { once: true });

// 🔊 Sound Toggle (nur wenn Button existiert)
if (button && video) {
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
}
