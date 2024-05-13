package it.epicode.classi;

import jakarta.persistence.*;
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(name = "Elemento_catalogo", discriminatorType = DiscriminatorType.STRING)
@NamedQuery(name = "GET_ISBN", query = "SELECT c FROM Catalogo c WHERE c.ISBN = :ISBN")
@NamedQuery(name = "GET_ANNO", query = "SELECT c FROM Catalogo c WHERE c.annoPubblicazione = :AnnoPubblicazione")
@NamedQuery(name = "GET_AUTORE", query = "SELECT c FROM Catalogo c WHERE c.autore = :AUTORE")
@NamedQuery(name = "GET_BY_TITOLO", query = "SELECT c FROM Catalogo c WHERE c.titolo LIKE CONCAT('%', :titolo, '%')")

public abstract class Catalogo {
    @Id
    @GeneratedValue
    private Integer ISBN;
    private String titolo;
    private Integer anno;
    private int pagine;

    public Catalogo( String titolo, Integer anno, int pagine) {
        this.titolo = titolo;
        this.anno = anno;
        this.pagine = pagine;
    }
    public Catalogo(){

    }


    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public Integer getISBN() {
        return ISBN;
    }

    public void setISBN(Integer ISBN) {
        this.ISBN = ISBN;
    }

    public Integer getAnno() {
        return anno;
    }

    public void setAnno(Integer anno) {
        this.anno = anno;
    }

    public int getPagine() {
        return pagine;
    }

    public void setPagine(int pagine) {
        this.pagine = pagine;
    }
    @Override
    public String toString() {
        return "Catalogo{" +
                "ISBN=" + ISBN +
                ", titolo='" + titolo + '\'' +
                ", annoPubblicazione=" + anno +
                ", numeroPagine=" + pagine +
                '}';
    }
}
