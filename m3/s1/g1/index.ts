interface Smartphone {
    credito: number
    numeroChiamate: number

    ricarica(a:number):void // non capisco perchè mi chiede di mettere undefined, void o any da chiedere a mike
    chiamata(n:number):void
    get chiamata404():number 
    get getNumeroChiamata():number
    azzeraChiamate(): void
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
        //console.log(this.ricarica(10)) // capire perchè non compare in console: ok non andava fatto qui
    }
    chiamata(n: number): void {
        this.credito -= (n * 0.20)
        this.numeroChiamate += 1
        //console.log(this.chiamata(3)) // capire anche questo idem a sopra
    }

    get chiamata404():number {
        return this.credito
    }
        
    get getNumeroChiamata():number {
        return this.numeroChiamate
    } 

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}
    const user = new User ('andrea', 'petruzzo')
        user.ricarica(10)
        user.chiamata(3)
        user.chiamata(3)
        user.chiamata(1)
        console.log(user.chiamata404)
        console.log(user.numeroChiamate)
        user.azzeraChiamate()
        