let tombola = document.querySelector(".tombola");

    for (let i = 1; i <= 76; i++) {
        let cella = document.createElement("div")
        cella.classList.add("tabella")
        cella.innerText = i
        tombola.appendChild(cella)
}
console.log(tombola)

