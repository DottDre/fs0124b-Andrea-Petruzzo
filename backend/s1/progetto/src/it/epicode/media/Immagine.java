package it.epicode.media;

import it.epicode.interfacce.MetodiVisibili;

public class Immagine extends EleMultimediale implements MetodiVisibili {
    private int luminosita = 5; // Inizializza la luminosità a 5
    public Immagine(String titolo){ // Costruttore che imposta il titolo
        this.setTitolo(titolo);
    }


    public int getLuminosita() { // Restituisce la luminosità attuale
        return luminosita;
    }


    public void show(){ // Mostra il titolo seguito da * in base alla luminosità
        System.out.print(this.getTitolo());
        for (int i = 0; i < this.getLuminosita(); i++){
            System.out.print("*");
        }

    }


    @Override
    public void aumentaLuminosita()  { // Aumenta la luminosità, se possibile
       if (luminosita<10){
           luminosita ++;
       }else{
           System.out.println("Luminosità gia al massimo");
       }
    }

    @Override
    public void diminuisciLuminosita() { // Diminuisce la luminosità, se possibile
        if (luminosita>0){
            luminosita --;
        }else{
            System.out.println("Luminosità gia al minimo");
        }
    }
}

