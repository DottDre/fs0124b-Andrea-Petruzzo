
async function chiamata(query){

    const apiKey = '3Er1dMjCTN5c4LXJ7uNuCB9XIOWDbw90tdixMwllcnGYXZoSBs5DxZJh';
    
    return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    }).then(rep => rep.json())
}
      let btn = document.querySelector(".btn");
      btn.addEventListener("click", () => {
        chiamata("donne").then((dati) => {
          console.log(dati);
          let img = document.querySelectorAll(".card-img-top");
          dati.photos.forEach((photo, i) => {
              img[i].src = photo.src.medium;
            });
        });
      });
        


