const video = document.getElementById("video");
const button = document.getElementById("sound-toggle");

let isMuted = true;

// 🔥 iOS Autoplay Fix (unverändert)
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

// beim ersten Touch (iOS Hack – bleibt!)
document.addEventListener("touchstart", forcePlay, { once: true });

// 🔊 Sound Toggle Funktion (sauber ausgelagert)
function toggleSound() {
  if (!video || !button) return;

  if (isMuted) {
    video.muted = false;
    video.play(); // wichtig für iOS
    button.innerText = "Sound Off";
    isMuted = false;
  } else {
    video.muted = true;
    button.innerText = "Sound On";
    isMuted = true;
  }
}

// 👉 Desktop
if (button) {
  button.addEventListener("click", toggleSound);

  // 👉 Mobile (iOS Fix)
  button.addEventListener("touchend", function(e) {
    e.preventDefault(); // verhindert Doppel-Trigger
    toggleSound();
  });
}
