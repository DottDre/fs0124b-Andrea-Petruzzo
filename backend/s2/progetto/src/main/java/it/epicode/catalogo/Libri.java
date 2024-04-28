package it.epicode.catalogo;

public class Libri extends Catalogo{
    private String autore;
    private String genere;

    public Libri(String titolo, int ISBN, int anno, int pagine) {
        super(titolo, ISBN, anno, pagine);
        this.autore = autore;
        this.genere = genere;
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
