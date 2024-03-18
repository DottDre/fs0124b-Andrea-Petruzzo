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
        console.log(this.ricarica(10));
    }
}
//# sourceMappingURL=index.js.map