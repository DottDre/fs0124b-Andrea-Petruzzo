// Definizione dell'endpoint e delle opzioni per la richiesta di ricerca
const endpoint = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
const searchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b36f7f0e4msh713a7788113b5dfp1c91f9jsna6e735e2137f",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// Selezionamento degli elementi del DOM
const container = document.querySelector(".placeholder-categories");
const searchForm = document.querySelector("form");
const searchBar = document.querySelector("input");
const showMoreContainer = document.querySelector(".show-more");

// Variabile globale per il controllo della paginazione
let globalIndex = 0;

// Funzione per rimuovere tutti gli elementi dall'elemento container
function removeAllElements() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

// Selezione degli elementi del modal per i messaggi di errore
const modal = document.querySelector(".search-modal");
const modalText = document.querySelector(".search-modal p");

// Funzione per gestire i risultati della ricerca
function searchResults(index = "") {
  const searchText = searchBar.value.trim().toLowerCase();

    // Richiesta di ricerca tramite fetch
  fetch(`${endpoint}${searchText}${index}`, searchOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.hasOwnProperty("error")) {
        modalText.innerText = "Invalid search query";
        modal.classList.toggle("modal-active");
        setTimeout(() => {
          modal.classList.toggle("modal-active");
        }, 1000);

        searchForm.reset();

        return;
      }

      if (data.data.length === 0) {
        modalText.innerText = "Nothing was found";
        modal.classList.toggle("modal-active");
        setTimeout(() => {
          modal.classList.toggle("modal-active");
        }, 1000);

        return;
      }

      // Rimozione degli elementi precedenti se siamo nella prima pagina di risultati
      if (globalIndex === 0) {
        removeAllElements();
      }

      // Nascondi il titolo principale e mostra il pulsante "Show More"
      document.querySelector("h2").style.display = "none";
      showMoreContainer.style.display = "block";

      // Iterazione sui risultati e creazione degli elementi della lista
      for (i = 0; i < data.data.length; i++) {
        let content = data.data[i];
        const card = document.createElement("div");
        card.classList.add("searchResultBox");
        card.innerHTML = `
            <div class="imgContainer">
                <img src="${content.album.cover}"></img>
            </div>
            <div class="searchText">
            <h3><a href="albumPage.html?id=${data.data[i].id}">${content.title}</a></h3>
            <p><a href="artistPage.html?id=${content.artist.id}">${content.artist.name}</a><p>
            </div>
            `;
        container.appendChild(card);
      }

      // let pepe = data.data;
      // let relevant = {};
      // pepe.map((elem) => {
      //   Object.assign(relevant, {
      //     [elem.artist.name]: pepe.filter(
      //       (a) => a.artist.name === elem.artist.name
      //     ).length,
      //   });
      // });

      if (data.data.length < 25) {
        moreButton.disabled = true;
      } else {
        moreButton.disabled = false;
      }
    });
}

// Event listener per il pulsante "Show More"
const moreButton = showMoreContainer.querySelector("button");
moreButton.addEventListener("click", () => {
  globalIndex += 25;
  searchResults(`&index=${globalIndex}`);
});
// searchForm.addEventListener("submit", removeAllElements);
// searchForm.addEventListener("submit", () => {
// });

// Event listener per il form di ricerca per reimpostare l'indice globale a zero
searchForm.addEventListener("submit", () => (globalIndex = 0));

// Event listener per la sottomissione del form di ricerca
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResults();
});

// Fetch iniziale per ottenere informazioni su una traccia specifica e popolare l'elemento del player audio
fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/1963530567`, searchOptions)
.then((response) => response.json())
.then((datas)  => {
  
  playerApi(datas)
  audioElem.src = datas.preview
})

const audioElem = document.querySelector('audio')
let playerInfo = document.querySelector('.leftDiv')

function playerApi(results){

  const leftDivSongImg = playerInfo.querySelector("img")
  const LeftDivArtistName =  playerInfo.querySelector("h4")
  const LeftDivTrackName =  playerInfo.querySelector("h2")

  leftDivSongImg.src = results.album.cover
  LeftDivArtistName.innerHTML = results.artist.name
  LeftDivTrackName.innerHTML = results.title

}

