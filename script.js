const video = document.getElementById("video");
const button = document.getElementById("sound-toggle");

let isMuted = true;

// 🔥 iOS Autoplay Fix
function forcePlay(e) {
  if (!video) return;

  // ❗ WICHTIG: ignoriert Klick auf Button
  if (e && button && button.contains(e.target)) return;

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

// 🔊 Sound Toggle
function toggleSound() {
  if (!video || !button) return;

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
}

// 👉 Desktop
if (button) {
  button.addEventListener("click", toggleSound);

  // 👉 Mobile
  button.addEventListener("touchend", function(e) {
    e.preventDefault();
    e.stopPropagation(); // 🔥 verhindert bubbling zum touchstart
    toggleSound();
  });
}
