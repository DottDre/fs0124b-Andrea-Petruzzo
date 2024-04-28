package it.epicode.catalogo;

public abstract class Catalogo {
    private long ISBN;
    private String titolo;
    private int anno;
    private int pagine;

    public Catalogo(String titolo, long ISBN, int anno, int pagine) {
        this.titolo = titolo;
        this.ISBN = ISBN;
        this.anno = anno;
        this.pagine = pagine;
    }

    public long getISBN() {
        return ISBN;
    }

    public void setISBN(long ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        this.anno = anno;
    }

    public int getPagine() {
        return pagine;
    }

    public void setPagine(int pagine) {
        this.pagine = pagine;
    }
}
