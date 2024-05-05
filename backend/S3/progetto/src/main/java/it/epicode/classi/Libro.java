package it.epicode.classi;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Libro")
public class Libro extends Catalogo {
    private String autore;
    private String genere;

    public Libro(String titolo, Integer anno, int pagine, String autore, String genere) {
        super(titolo, anno, pagine);
        this.autore = autore;
        this.genere = genere;
    }
    public Libro(){

    }

    public String getAutore() {
        return autore;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }
}
