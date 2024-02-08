let tombola = document.querySelector(".tombola");

    for (let i = 1; i <= 90; i++) {
        let cella = document.createElement("div")
        cella.classList.add("tabella")
        cella.innerText = i
        tombola.appendChild(cella)
}
//console.log(tombola)

let btn = document.querySelector(".bottone")
function numeroEstrazione() {
     let a = Math.floor(Math.random() * 89)+1
     return a
    
}
//console.log(numeroEstrazione())
btn.addEventListener('click', ()=>{
    let b = numeroEstrazione()
    selectcella(b)
    }
)



//console.log(b)
