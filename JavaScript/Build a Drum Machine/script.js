const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const playAllButton = document.getElementById("play-all");

const playSound = (key) => {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  display.innerText = pad.id;
};

const playAllSounds = () => {
  pads.forEach((pad) => {
    const audio = pad.querySelector("audio");
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  });

  display.innerText = "All";
};

pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.innerText;
    playSound(key);
  });
});

playAllButton.addEventListener("click", playAllSounds);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    playAllSounds();
    return;
  }

  const key = e.key.toUpperCase();
  playSound(key);
});
