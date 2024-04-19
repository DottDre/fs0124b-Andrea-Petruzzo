package it.epicode.media;

public abstract class EleRiproducibile extends EleMultimediale implements MetodiRiproducibili{
    private int durata;
    private int volume;


    public int getDurata() {
        return durata;
    }

    public void setDurata(int durata) {
        this.durata = durata;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    @Override
    public void aumentaVolume() {


    }

    @Override
    public void diminuisciVolume() {

    }

    @Override
    public void play() {

    }
}
