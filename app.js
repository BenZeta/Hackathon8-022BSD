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
    longLyrics: "If you don’t wanna see me dancing with somebody, don’t show up, don’t come out",
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
];

// BACKUP
document.addEventListener("DOMContentLoaded", () => {
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
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        `;

    const deleteBtn = document.querySelector('.')

    return div;
  }

  function renderCard() {
    const container = document.querySelector(".container");

    for (let i = 0; i < songs.length; i++) {
      const card = helperCreateCard(songs[i]);
      container.appendChild(card);
    }
  }

  function deleteCard(id) {
    let newData = [];

    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id !== id) {
        newData.push(songs[i]);
      }
    }

    songs = newData;

    renderCard();
  }


  renderCard();
});
