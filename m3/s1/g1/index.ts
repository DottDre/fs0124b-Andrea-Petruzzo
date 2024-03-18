interface Smartphone {
    credito: number
    numeroChiamate: number

    ricarica(ammontare:number): undefined
}

class User implements Smartphone {
    nome: string
    cognome: string
    credito: number = 0
    numeroChiamate: number = 0
    constructor (nome: string, cognome: string){
        this.nome = nome
        this.cognome = cognome
    }

    ricarica(a: number): undefined{
        this.credito += a
        console.log(this.ricarica(10)) 
    }
    
    
}
