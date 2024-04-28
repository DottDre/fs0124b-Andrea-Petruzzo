package it.epicode.service;

import it.epicode.catalogo.Catalogo;
import it.epicode.catalogo.Libri;
import it.epicode.catalogo.Riviste;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;


public class FileLibreria implements LibreriaService{
    public static final Logger logger = LoggerFactory.getLogger(FileLibreria.class);
    public static final String Storage = "./libreria.csv";


    public final ArrayList<Catalogo> libreria = new ArrayList<>();

    public FileLibreria(){
        carica();
    }

    @Override
    public void aggiugni(Catalogo catalogo) {
        libreria.add(catalogo);
        salva();
    }

    @Override
    public void rimuoviISBN(long ISBN) {
        libreria.removeIf(p -> p.getISBN() == ISBN);
        salva();
    }

    @Override
    public Catalogo trovaISBN(long ISBN) {
        return libreria.stream()
                .filter(p -> p.getISBN() == ISBN)
                .findFirst()
                .orElse(null);
    }

    @Override
    public Catalogo trovaAnno(int anno) {
        return libreria.stream()
                .filter(p -> p.getISBN() == anno)
                .findFirst()
                .orElse(null);
    }

    @Override
    public ArrayList<Catalogo> prendiTutto() {
        return new ArrayList<>(libreria);
    }

    @Override
    public void salva() {
        File f = new File(Storage);
        try {
            FileUtils.write(f, "", StandardCharsets.ISO_8859_1);
            for (Catalogo p : libreria) {
                List<String> lines = new ArrayList<>();
                lines.add(p.getClass().getSimpleName());
                lines.add(String.valueOf(p.getISBN()));
                lines.add(p.getTitolo());
                lines.add(String.valueOf(p.getAnno()));
                lines.add(String.valueOf(p.getPagine()));
                if (p instanceof Libri) {
                    Libri l = (Libri) p;
                    lines.add(l.getAutore());
                    lines.add(l.getGenere());
                } else if (p instanceof Riviste) {
                    Riviste r = (Riviste) p;
                    lines.add(r.getPeriodicita().toString());
                }
                FileUtils.writeStringToFile(f, String.join(",", lines) + System.lineSeparator(), StandardCharsets.ISO_8859_1, true);
            }
        } catch (IOException e) {
            logger.error("Errore durante il salvataggio", e);
        }
    }

    @Override
    public void carica() {

    }
}
