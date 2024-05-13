package it.epicode;

import it.epicode.catalogo.Libri;
import it.epicode.catalogo.Peridiocita;
import it.epicode.catalogo.Riviste;
import it.epicode.service.FileLibreria;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        FileLibreria libreria = new FileLibreria();

        int choice = 0;
        do {;
            System.out.println("|      Catalogo della Biblioteca      |");
            System.out.println("| 1 - ISBN                  |");
            System.out.println("| 2 - Cerca per anno di pubblicazione |");
            System.out.println("| 3 - Cerca per autore                |");
            System.out.println("| 4 - Elimina per ISBN                |");
            System.out.println("| 5 - Visualizza tutti gli articoli   |");
            System.out.println("| 6 - Aggiungi una pubblicazione      |");
            System.out.println("| 7 - Esci                            |");
            System.out.print("Seleziona un'opzione: ");

            try {
                choice = Integer.parseInt(scanner.nextLine());
                switch (choice) {
                    case 1:
                        System.out.print("Inserisci ISBN: ");
                        Long isbn = Long.parseLong(scanner.nextLine());
                        libreria.trovaISBN(isbn);
                        break;
                    case 2:
                        System.out.print("Inserisci anno di pubblicazione: ");
                        int anno = Integer.parseInt(scanner.nextLine());
                        libreria.trovaAnno(anno);
                        break;
                    case 3:
                        System.out.print("Inserisci autore: ");
                        String autore = scanner.nextLine();
                        libreria.trovaAutore(autore);
                        break;
                    case 4:
                        System.out.print("Inserisci ISBN per l'eliminazione: ");
                        Long isbnToDelete = Long.parseLong(scanner.nextLine());
                        libreria.rimuoviISBN(isbnToDelete);
                        System.out.println("Pubblicazione eliminata.");
                        break;
                    case 5:
                        libreria.prendiTutto();
                        break;
                    case 6:
                        addPublication(scanner, libreria);
                        break;
                    case 7:
                        System.out.println("Uscita in corso...");
                        break;
                    default:
                        System.out.println("Opzione non valida, per favore riprova.");
                        break;
                }
            } catch (NumberFormatException e) {
                System.out.println("Errore di input, per favore inserisci un numero valido.");
            }
        } while (choice != 7);

        scanner.close();
    }

    private static void addPublication(Scanner scanner, FileLibreria libreria) {
        System.out.print("Inserisci 'libro' o 'rivista': ");
        String type = scanner.nextLine().toLowerCase();
        if ("libro".equals(type)) {
            addBook(scanner, libreria);
        } else if ("rivista".equals(type)) {
            addMagazine(scanner, libreria);
        } else {
            System.out.println("Tipo non valido. Inserisci 'libro' o 'rivista'.");
        }
    }

    private static void addBook(Scanner scanner, FileLibreria biblioteca) {
        System.out.print("Inserisci ISBN: ");
        Long isbn = Long.parseLong(scanner.nextLine());
        System.out.print("Inserisci Titolo: ");
        String titolo = scanner.nextLine();
        System.out.print("Inserisci Anno di Pubblicazione: ");
        int anno = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci Numero di Pagine: ");
        int pagine = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci Autore: ");
        String autore = scanner.nextLine();
        System.out.print("Inserisci Genere: ");
        String genere = scanner.nextLine();
        biblioteca.aggiugni(new Libri(titolo, isbn, anno, pagine, autore, genere));
        System.out.println("Libro aggiunto con successo!");
    }

    private static void addMagazine(Scanner scanner, FileLibreria biblioteca) {
        System.out.print("Inserisci ISBN: ");
        Long isbn = Long.parseLong(scanner.nextLine());
        System.out.print("Inserisci Titolo: ");
        String titolo = scanner.nextLine();
        System.out.print("Inserisci Anno di Pubblicazione: ");
        int anno = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci Numero di Pagine: ");
        int pagine = Integer.parseInt(scanner.nextLine());
        System.out.println("Scegli la frequenza della rivista:");
        System.out.println("1 - Settimanale");
        System.out.println("2 - Mensile");
        System.out.println("3 - Semestrale");
        System.out.print("Inserisci opzione: ");
        int freqChoice = Integer.parseInt(scanner.nextLine());
        Peridiocita peridiocita = switch (freqChoice) {
            case 1 -> Peridiocita.SETTIMANALE;
            case 2 -> Peridiocita.MENSILE;
            case 3 -> Peridiocita.SEMESTRALE;
            default -> throw new IllegalArgumentException("Opzione non valida.");
        };
        biblioteca.aggiugni(new Riviste(titolo, isbn, anno, pagine, peridiocita));
        System.out.println("Rivista aggiunta con successo!");
    }
}