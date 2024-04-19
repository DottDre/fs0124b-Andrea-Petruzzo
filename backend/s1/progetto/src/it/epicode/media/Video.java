package it.epicode.media;

import it.epicode.interfacce.MetodiVisibili;

public class Video extends EleRiproducibile implements MetodiVisibili {
    private int luminosita = 5; // Inizializza la luminosità a 5

    public Video(String titolo, int durata){ // Costruttore che imposta titolo e durata
        this.setTitolo(titolo);
        this.setDurata(durata);
    }

    public int getLuminosita() { // Restituisce la luminosità attuale
        return luminosita;
    }

    @Override
    public void play() { // Riproduco il video mostrando il titolo
        super.play();// Chiamo il metodo play della classe padre
        for (int i = 0; i < this.getDurata(); i++){

            System.out.print(this.getTitolo());// Mostro il titolo

            for (int j = 0; j < this.getVolume(); j++){ // Mostro ! per il volume

                System.out.print("!");

            }
            for (int z = 0; z < this.getLuminosita(); z++){ // Mostro * per la luminosità

                System.out.print("*");
            }
            System.out.println(".");
        }
    }

    @Override
    public void aumentaLuminosita() {  // Aumento la luminosità, se possibile
        if (this.getLuminosita()<10){
            luminosita ++;
        }else{
            System.out.println("Luminosità gia al massimo");
        }
    }

    @Override
    public void diminuisciLuminosita() { // Diminuisco la luminosità, se possibile
        if (this.getLuminosita()>0){
            luminosita --;
        }else{
            System.out.println("Luminosità gia al minimo");
        }
    }
}
