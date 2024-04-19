package it.epicode.media;

public class Audio extends EleRiproducibile {

    public Audio (String titolo, int durata){ // Costruttore che imposta titolo e durata
        this.setTitolo(titolo);
        this.setDurata(durata);
    }
    public void play() { // Riproduce l'audio mostrando il titolo
        super.play(); // Chiama il metodo play della classe padre
        for (int i = 0; i < this.getDurata(); i++){

            System.out.print(this.getTitolo());  // Mostra il titolo

            for (int j = 0; j < this.getVolume(); j++){ // Mostro ! per il volume

                System.out.print("!");

            }
            System.out.println(".");
        }
    }
}
