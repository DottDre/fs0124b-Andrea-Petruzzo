package it.epicode.classi;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Rivista")
public class Rivista extends Catalogo {
    private Periodicita periodicita;

    public Rivista(String titolo, Integer anno, int pagine, Periodicita periodicita) {
        super(titolo, anno, pagine);
        this.periodicita = periodicita;
    }
    public Rivista(){

    }

    public Periodicita getPeriodicita() {
        return periodicita;
    }

    public void setPeriodicita(Periodicita periodicita) {
        this.periodicita = periodicita;
    }
}
