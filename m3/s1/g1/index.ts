interface Smartphone {
    credito: number
    numeroChiamate: number

    ricarica(a:number): void
    chiamata(n:number): void
    chiamata404:number 
    getNumeroChiamata: number
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

    ricarica(a: number): void{
        this.credito += a
        console.log(this.ricarica(10)) // capire perchè non compare in console
    }
    chiamata(n: number): void {
        this.credito - (n * 0.20)
        console.log(this.chiamata(3)) // capire anche questo
    }

    chiamata404: number = this.credito
    getNumeroChiamata: number = this.numeroChiamate

    
}
