package it.epicode.service;

import it.epicode.classi.Catalogo;
import it.epicode.classi.Prestito;

import java.util.List;
import java.util.Optional;

public interface CatalogoInterface {
    public void save(Catalogo cat);
    public void removeByISBN(Integer ISBN);

    public Optional<Catalogo> getByISBN(Integer ISBN);

    public List<Catalogo> getByAnno(Integer anno);

    public List<Catalogo > getByAutore(String autore);

    public List<Catalogo> getByTitolo(String titolo);

    public List<Catalogo> getElementiInPrestito(Integer numeroTessera);

    public List<Prestito> getPrestitiScadutiNonRestituiti();

}
