"use strict";
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    ricarica(a) {
        this.credito += a;
        //console.log(this.ricarica(10)) // capire perchè non compare in console: ok non andava fatto qui
    }
    chiamata(n) {
        if (this.credito - (n * 0.20) < 0) {
            return console.log('credito insufficente');
        }
        this.credito -= (n * 0.20);
        this.numeroChiamate += 1;
        //console.log(this.chiamata(3)) // capire anche questo idem a sopra
    }
    get chiamata404() {
        return this.credito;
    }
    get getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user = new User('andrea', 'petruzzo');
user.ricarica(8);
user.chiamata(3);
user.chiamata(3);
user.chiamata(1);
user.chiamata(8);
console.log(user.chiamata404);
console.log(user.numeroChiamate);
user.azzeraChiamate();
user.chiamata(3);
user.chiamata(3);
user.chiamata(20);
console.log(user.chiamata404);
console.log(user.numeroChiamate);
//# sourceMappingURL=index.js.map