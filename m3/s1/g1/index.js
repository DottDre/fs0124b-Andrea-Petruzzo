"use strict";
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.chiamata404 = this.credito;
        this.getNumeroChiamata = this.numeroChiamate;
        this.nome = nome;
        this.cognome = cognome;
    }
    ricarica(a) {
        this.credito += a;
        console.log(this.ricarica(10)); // capire perchè non compare in console
    }
    chiamata(n) {
        this.credito - (n * 0.20);
        console.log(this.chiamata(3)); // capire anche questo
    }
}
//# sourceMappingURL=index.js.map