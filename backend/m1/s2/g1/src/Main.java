import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    private static final Logger log = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);

        int[] array = random.ints(5, 1, 11).toArray();

        log.info("Array di interi generato: " + Arrays.toString(array));

        int posizione;
        int valore;
        while (true) {
            log.info("Inserisci una posizione (0 per uscire): ");
            posizione = scanner.nextInt();

            if (posizione == 0) {
                break;
            }
            try {

                if (posizione < 1 || posizione > array.length) {
                    throw new IndexOutOfBoundsException("Posizione non valida");
                }
                    log.info("Inserisci un valore: ");
                    valore = scanner.nextInt();
                if (valore < 1 || valore > 10) {
                    throw new IllegalArgumentException("Il valore deve essere compreso tra 1 e 10");
                }
                array[posizione - 1] = valore;
                    log.info("Nuovo stato dell'array: " + Arrays.toString(array));
                } catch (IndexOutOfBoundsException e) {
                    log.error("Errore: Posizione non valida. Inserisci una posizione compresa tra 1 e " + array.length + ".");
                }
                catch (IllegalArgumentException e) {
                    log.error("Errore: Il valore deve essere compreso tra 1 e 10.");
            }
        }
        log.info("Programma terminato.");
    }
    }


