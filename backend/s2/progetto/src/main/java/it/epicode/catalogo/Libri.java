package it.epicode.catalogo;

public class Libri extends Catalogo{
    private String autore;
    private String genere;

    public Libri(String titolo, long ISBN, int anno, int pagine, String autore, String genere) {
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
