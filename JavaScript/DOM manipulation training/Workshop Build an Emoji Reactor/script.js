const btnContainer = document.querySelector(".btn-container");

const pEl = document.createElement("p");
pEl.classList.add("result-text");

const inputEl = document.createElement("input");
inputEl.classList.add("input-text");

const submitBtn = document.createElement("button");
submitBtn.classList.add("submit-btn");
submitBtn.textContent = "Send answer";

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset-btn");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".emoji-btn .count").forEach((count) => {
    count.textContent = "0/10";
  });

  if (pEl.isConnected) {
    pEl.remove();
  }

  if (inputEl.isConnected) {
    inputEl.value = "";
    inputEl.remove();
  }

  if (submitBtn.isConnected) {
    submitBtn.remove();
  }

  if (resetBtn.isConnected) {
    resetBtn.remove();
  }
});

function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  const emojiSpan = btn.querySelector("span");
  const emoji = emojiSpan ? emojiSpan.textContent : "";

  if (currCount >= 10) return;

  currCount += 1;
  countEl.textContent = `${currCount}/10`;

  if (currCount === 10) {
    if (!pEl.isConnected) {
      btnContainer.appendChild(pEl);
    }

    pEl.textContent = `Can you tell me why are you so ${emoji}?`;

    if (!inputEl.isConnected) {
      btnContainer.appendChild(inputEl);
    }

    if (!resetBtn.isConnected) {
      btnContainer.appendChild(resetBtn);
    }

    if (!submitBtn.isConnected) {
      btnContainer.appendChild(submitBtn);
    }
  }
}

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => btn.addEventListener("click", () => updateCount(btn)));
