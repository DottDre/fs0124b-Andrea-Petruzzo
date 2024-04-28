package it.epicode.service;

import it.epicode.catalogo.Catalogo;

import java.util.ArrayList;

public interface LibreriaService {

    void aggiugni(Catalogo catalogo);

    void rimuoviISBN(long ISBN);

    Catalogo trovaISBN(long ISBN);

    Catalogo trovaAnno(int anno);

    ArrayList<Catalogo> prendiTutto();

    void salva();

    void carica();


}
