package it.epicode.media;

import it.epicode.interfacce.MetodiRiproducibili;

public abstract class EleRiproducibile extends EleMultimediale implements MetodiRiproducibili {
    private int durata; // Durata del media
    private int volume = 5; // Livello del volume di default


    public int getDurata() { // Restituisce la durata del media
        return durata;
    }

    public void setDurata(int durata) { // Imposta la durata del media
        this.durata = durata;
    }

    public int getVolume() { // Restituisce il livello del volume attuale
        return volume;
    }



    @Override
    public void aumentaVolume() { // Aumenta il livello del volume, se possibile

        if (volume<10){
            volume ++;
        }else {
            System.out.println("volume al massimo");
        }

    }

    @Override
    public void diminuisciVolume() { // Diminuisce il livello del volume, se possibile
        if (volume>0){
            volume --;
        }else {
            System.out.println("volume al minimo");
        }
    }

    @Override
    public void play() { // Metodo astratto che verrà implementato nelle sottoclassi
        // Implementazione del metodo play dipenderà dalla sottoclasse
    }
}
