let tombola = document.querySelector(".tombola");

    for (let i = 1; i <= 90; i++) {
        let cella = document.createElement("div")
        cella.classList.add("tabella")
        cella.innerText = i
        tombola.appendChild(cella)
}
console.log(tombola)

let array = Array.from({length:90},(_,i)=> i+1)
let btn = document.querySelector(".bottone")
function numeroEstrazione() {
    if (array.length > 0) {
        let a = Math.floor(Math.random() * array.length)
        let estratto = array[a]
        array.splice(a, 1)
        return estratto
    }else{
        return null
    }
}
let celle = document.querySelectorAll('.tabella')
console.log(numeroEstrazione())
btn.addEventListener('click', ()=>{
    let b = 0 
    b = numeroEstrazione()
    console.log(b)
    celle.forEach(cella => {
        if (parseInt(cella.innerText) === b) {
            cella.classList.add('tabella-selezionato')
        }
    })
}
)
    
            
