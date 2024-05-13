package it.epicode.classi;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Prestito {
    private Long id;
    private Utente utente;
    private List<Catalogo> prestito = new ArrayList<>();
    private LocalDate inzioPrestito;
    private LocalDate finePrestito;
    private LocalDate restituzione;

    public Prestito(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public List<Catalogo> getPrestito() {
        return prestito;
    }

    public void setPrestito(List<Catalogo> prestito) {
        this.prestito = prestito;
    }

    public LocalDate getInzioPrestito() {
        return inzioPrestito;
    }

    public void setInzioPrestito(LocalDate inzioPrestito) {
        this.inzioPrestito = inzioPrestito;
    }

    public LocalDate getFinePrestito() {
        return finePrestito;
    }

    public void setFinePrestito(LocalDate finePrestito) {
        this.finePrestito = finePrestito;
    }

    public LocalDate getRestituzione() {
        return restituzione;
    }

    public void setRestituzione(LocalDate restituzione) {
        this.restituzione = restituzione;
    }
}
