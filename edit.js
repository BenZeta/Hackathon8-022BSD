function test() {
  let getId = Number(localStorage.getItem("editId"));
  let getEditObject = {};
  const getSongs = JSON.parse(localStorage.getItem("songsData")) || songs;
  for (let i = 0; i < getSongs.length; i++) {
    if (getSongs[i].id === getId) {
      getEditObject = getSongs[i];
    }
  }
  let editName = document.getElementById("editName");
  let editTitle = document.getElementById("editTitle");
  let editAlbum = document.getElementById("editAlbum");
  let editLyrics = document.getElementById("editLyrics");

  editName.value = getEditObject.name;
  editTitle.value = getEditObject.title;
  editAlbum.value = getEditObject.album;
  editLyrics.value = getEditObject.shortLyrics;
}

test();

function simpan() {
  let editName = document.getElementById("editName");
  let editTitle = document.getElementById("editTitle");
  let editAlbum = document.getElementById("editAlbum");
  let editLyrics = document.getElementById("editLyrics");

  let getId = Number(localStorage.getItem("editId"));
  // console.log(editName.value, editTitle.value, editAlbum.value, editLyrics.value);

  const getSongs = JSON.parse(localStorage.getItem("songsData")) || songs;
  //   console.log(getSongs);
  let result = [];
  for (let i = 0; i < getSongs.length; i++) {
    // console.log(getSongs[i].id, getId);
    if (getSongs[i].id === getId) {
      getSongs[i].name = editName.value;
      getSongs[i].title = editTitle.value;
      getSongs[i].album = editAlbum.value;
      getSongs[i].shortLyrics = editLyrics.value;
      result.push(getSongs[i]);
    } else {
      result.push(getSongs[i]);
    }
  }
  localStorage.setItem("songsData", JSON.stringify(result));
}