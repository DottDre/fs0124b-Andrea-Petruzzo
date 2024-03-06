
//<div class="card" style="width: 18rem;">
//  <img src="..." class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//</div>
fetch("https://striveschool-api.herokuapp.com/books")
.then(res => res.json())
.then(dati => {
  for (let book of dati) {
    let div = document.createElement("div");
    div.classList.add("col-3", "mb-3");
    document.querySelector(".row").append(div);

    let card = document.createElement("div");
    card.classList.add("card");
    div.appendChild(card);

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.img;
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let titolo = document.createElement("h5");
    titolo.classList.add("card-title");
    titolo.innerText = book.title;
    cardBody.appendChild(titolo);

    let prezzo = document.createElement("p");
    prezzo.classList.add("card-text");
    prezzo.innerText = book.price;
    cardBody.appendChild(prezzo);

    let btn = document.createElement("a");
    btn.classList.add("btn", "btn-danger");
    btn.innerText = "Scarta";
    cardBody.appendChild(btn);

    btn.addEventListener("click", elimina);

    function elimina() {
      div.remove();
    }
  }
});
