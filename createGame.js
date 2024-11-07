function initializeGame() {
  const gameId = Number(localStorage.getItem("gameId"));
  const getSong = JSON.parse(localStorage.getItem("songsData"));

  const song = getSong.find((s) => s.id == gameId);

  console.log("Found song:", song);

  if (!song) {
    alert("Song not found!");
    window.location.href = "index.html";
    return;
  }

  const words = song.longLyrics.split(" ");
  const randomIndex = Math.floor(Math.random() * words.length);
  const correctAnswer = words[randomIndex];
  words[randomIndex] = "_____";

  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = `
            <h2>${song.title} by ${song.name}</h2>
            <p class="lyrics">${words.join(" ")}</p>
            <div class="game-input">
                <input type="text" id="answer-input" placeholder="Type the missing word">
                <button onclick="checkAnswer('${correctAnswer}')">Submit</button>
            </div>
            <p id="result"></p>
            <a href="index.html"><button>Back to Home</button></a>
        `;
}

function checkAnswer(missingWord) {
  const playerAnswer = document.getElementById("answer-input").value.trim();
  const resultMessage = document.getElementById("result");

  if (playerAnswer.toLowerCase() === missingWord.toLowerCase()) {
    resultMessage.textContent = "Correct!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "Try again!";
    resultMessage.style.color = "red";
  }
}

initializeGame();

//test123