const footballTeam = {
  team: "FC Example United",
  year: 2025,
  headCoach: "Alex Morgan",
  players: [
    { name: "Caleb Dawson", position: "forward", isCaptain: false },
    { name: "Miles Harper", position: "forward", isCaptain: false },
    { name: "Logan Pierce", position: "forward", isCaptain: false },
    { name: "James Archer", position: "forward", isCaptain: false },

    { name: "Lucas Bennett", position: "midfielder", isCaptain: true },
    { name: "Aiden Foster", position: "midfielder", isCaptain: false },
    { name: "Henry Walsh", position: "midfielder", isCaptain: false },
    { name: "Jack Barrett", position: "midfielder", isCaptain: false },

    { name: "Mason Hayes", position: "defender", isCaptain: false },
    { name: "Leo Grant", position: "defender", isCaptain: false },
    { name: "Owen Parker", position: "defender", isCaptain: false },
    { name: "Ryan Cole", position: "defender", isCaptain: false },

    { name: "Sam Carter", position: "goalkeeper", isCaptain: false },
    { name: "Liam Brooks", position: "goalkeeper", isCaptain: false },
    { name: "Noah Turner", position: "goalkeeper", isCaptain: false },
    { name: "Ethan Reed", position: "goalkeeper", isCaptain: false },
  ],
};

const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const coachSpan = document.getElementById("head-coach");
const selectContainer = document.getElementById("players");
const cardsContainer = document.getElementById("player-cards");
teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
coachSpan.textContent = footballTeam.headCoach;

function renderCards(list) {
  cardsContainer.innerHTML = list
    .map(
      ({ name, position, isCaptain }) => `
    <div class="player-card">
      <h2>${name}${isCaptain ? " (Captain)" : ""}</h2>
      <p>Position: ${position}</p>
    </div>
  `
    )
    .join("");
}

function getFilteredPlayers() {
  const filter = selectContainer.value;
  return filter === "all"
    ? footballTeam.players
    : footballTeam.players.filter((p) => p.position === filter);
}

function onPlayersChange() {
  renderCards(getFilteredPlayers());
}

renderCards(footballTeam.players);
selectContainer.addEventListener("change", onPlayersChange);
