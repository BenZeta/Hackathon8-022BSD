let songs = [
  {
    id: 1,
    name: "Taylor Swift",
    title: "Blank Space",
    album: "1989",
    shortLyrics: "Got a long list of ex-lovers",
    longLyrics: "Darling, I'm a nightmare dressed like a daydream",
  },
  {
    id: 2,
    name: "Ed Sheeran",
    title: "Shape of You",
    album: "÷ (Divide)",
    shortLyrics: "The club isn't the best place to find a lover",
    longLyrics: "Last night you were in my room, and now my bedsheets smell like you",
  },
  {
    id: 3,
    name: "Adele",
    title: "Hello",
    album: "25",
    shortLyrics: "Hello from the other side",
    longLyrics: "It's no secret that the both of us are running out of time",
  },
  {
    id: 4,
    name: "Bruno Mars",
    title: "Just the Way You Are",
    album: "Doo-Wops & Hooligans",
    shortLyrics: "When I see your face",
    longLyrics: "Her laugh, her laugh, she hates but I think it's so sexy",
  },
  {
    id: 5,
    name: "Billie Eilish",
    title: "bad guy",
    album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    shortLyrics: "So you're a tough guy",
    longLyrics: "I'm that bad type, make your mama sad type, make your girlfriend mad tight",
  },
  {
    id: 6,
    name: "Dua Lipa",
    title: "Don't Start Now",
    album: "Future Nostalgia",
    shortLyrics: "Did a full 180, crazy",
    longLyrics: "If you don't wanna see me dancing with somebody, don't show up, don't come out",
  },
  {
    id: 7,
    name: "Shawn Mendes",
    title: "Señorita",
    album: "Shawn Mendes",
    shortLyrics: "I love it when you call me señorita",
    longLyrics: "Ooh, I should be running, ooh, you keep me coming for ya",
  },
  {
    id: 8,
    name: "Ariana Grande",
    title: "7 rings",
    album: "thank u, next",
    shortLyrics: "I see it, I like it, I want it, I got it",
    longLyrics: "Wearing a ring but ain't gon' be no missus, bought matching diamonds for six of my b******",
  },
  {
    id: 9,
    name: "Ariana Grande",
    title: "7 rings",
    album: "thank u, next",
    shortLyrics: "I see it, I like it, I want it, I got it",
    longLyrics: "Wearing a ring but ain't gon' be no missus, bought matching diamonds for six of my b******",
  },
];

// BACKUP
// let hihihi = document.getElementById('hihihi');

// hihihi.value= "Flash"
// localStorage.setItem("songsData", JSON.stringify(songs));

document.addEventListener("DOMContentLoaded", function () {
  function helperCreateCard(song) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
              <img src="https://th.bing.com/th/id/OIP.eVBndpZHDo9nbZVKefk8bAHaD4?w=345&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Gambar Kartu' class="card-img" />
          <div class="card-content">
            <h3 class="card-name">${song.name}</h3>
            <p class="card-judul">${song.title}</p>
            <p class="card-album">${song.album}</p>
            <p class="card-lyric">${song.shortLyrics}</p>
          <div class="button">
            <button class="start-button">Start Game</button>
            <a href="edit.html"><button class="edit-button">Edit</button></a>
            <button class="delete-button">Delete</button>
          </div>
          `;

    const deleteBtn = div.querySelector(".delete-button");
    const editBtn = div.querySelector(".edit-button");

    deleteBtn.addEventListener("click", () => {
      deleteCard(song.id);
    });
    editBtn.addEventListener("click", () => {
      editCard(song.id);
    });

    return div;
  }

  function renderCard() {
    let getSong = JSON.parse(localStorage.getItem("songsData")) || songs;

    let filterInput = document.getElementById("search-input");
    let filterType = document.getElementById("filterType");

    const container = document.querySelector(".container");
    if (!container) {
      return;
    }

    container.innerHTML = "";

    let filteredSongs = [];

    if (filterInput.value === "") {
      filteredSongs = getSong;
    } else {
      for (let i = 0; i < getSong.length; i++) {
        const checkFilter = getSong[i][filterType.value].toLowerCase();

        if (checkFilter && checkFilter.includes(filterInput.value.toLowerCase())) {
          filteredSongs.push(getSong[i]);
        }
      }
    }

    for (let i = 0; i < filteredSongs.length; i++) {
      const card = helperCreateCard(filteredSongs[i]);
      container.appendChild(card);
    }
  }

  let filterInput = document.getElementById("search-input");
  let filterType = document.getElementById("filterType");

  if (filterInput && filterType) {
    filterInput.addEventListener("input", renderCard);
    filterType.addEventListener("change", renderCard);
  }

  function deleteCard(id) {
    let getSong = JSON.parse(localStorage.getItem("songsData")) || songs;

    const newData = getSong.filter((song) => song.id !== id);

    localStorage.setItem("songsData", JSON.stringify(newData));

    songs = newData;
    renderCard();
  }

  function createCard(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let album = document.getElementById("album").value;
    let lyrics = document.getElementById("lyrics").value;

    let getSong = JSON.parse(localStorage.getItem("songsData")) || songs;

    let highestId = -Infinity;
    if ((name, title, album, lyrics)) {
      for (let i = 0; i < getSong.length; i++) {
        if (getSong[i].id > highestId) {
          highestId = getSong[i].id;
        }
      }
      const newSong = {
        id: highestId + 1,
        name: name,
        title: title,
        album: album,
        shortLyrics: lyrics.slice(0, 30),
        longLyrics: lyrics,
      };

      getSong.push(newSong);

      localStorage.setItem("songsData", JSON.stringify(getSong));

      window.location.href = "index.html";
    } else {
      console.log("Form is empty");
    }
  }

  let submitFormBtn = document.querySelector(".submit-btn");

  if (submitFormBtn) {
    submitFormBtn.addEventListener("click", createCard);
  }

  function editCard(event, id) {
    event.preventDefault();

    const songs = JSON.parse(localStorage.getItem("songsData")) || songs;

   
  }

  renderCard();
});
