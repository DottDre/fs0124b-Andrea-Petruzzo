package it.epicode.service;

import it.epicode.catalogo.Catalogo;
import it.epicode.catalogo.Libri;
import it.epicode.catalogo.Peridiocita;
import it.epicode.catalogo.Riviste;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


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
    public Catalogo trovaAutore(String autore) {
        return (Catalogo) libreria.stream()
                .filter(p -> p instanceof Libri && ((Libri) p).getAutore().equals(autore))
                .collect(Collectors.toList());
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
                List<String> linee = new ArrayList<>();
                linee.add(p.getClass().getSimpleName());
                linee.add(String.valueOf(p.getISBN()));
                linee.add(p.getTitolo());
                linee.add(String.valueOf(p.getAnno()));
                linee.add(String.valueOf(p.getPagine()));
                if (p instanceof Libri) {
                    Libri l = (Libri) p;
                    linee.add(l.getAutore());
                    linee.add(l.getGenere());
                } else if (p instanceof Riviste) {
                    Riviste r = (Riviste) p;
                    linee.add(r.getPeriodicita().toString());
                }
                FileUtils.writeStringToFile(f, String.join(",", linee) + System.lineSeparator(), StandardCharsets.ISO_8859_1, true);
            }
        } catch (IOException e) {
            logger.error("Errore durante il salvataggio", e);
        }
    }

    @Override
    public void carica() {
        File f = new File(Storage);
        if (!f.exists()) return;

        try {
            List<String> lines = FileUtils.readLines(f, StandardCharsets.ISO_8859_1);
            for (String line : lines) {
                String[] parts = line.split(",");
                if (parts.length < 2) {
                    logger.error("Riga non valida o incompleta: " + line);
                    continue;
                }
                Long ISBN = Long.parseLong(parts[1]);
                String titolo = parts[2];
                int anno = Integer.parseInt(parts[3]);
                int pagine = Integer.parseInt(parts[4]);
                if ("Libri".equals(parts[0]) && parts.length >= 7) {
                    String autore = parts[5];
                    String genere = parts[6];
                    libreria.add(new Libri(titolo, ISBN, anno, pagine, autore, genere));
                } else if ("Rivista".equals(parts[0]) && parts.length >= 6) {
                    Peridiocita periodicita = Peridiocita.valueOf(parts[5]);
                    libreria.add(new Riviste(titolo, ISBN, anno, pagine, periodicita));
                }
            }
        } catch (IOException e) {
            logger.error("Errore durante il caricamento", e);
        }
    }
}
