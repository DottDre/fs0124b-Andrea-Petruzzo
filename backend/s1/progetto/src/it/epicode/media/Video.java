package it.epicode.media;

public class Video extends EleRiproducibile implements MetodiVisibili{
    private int luminosita;

    public Video(String titolo, int durata){
        this.setTitolo(titolo);
        this.setDurata(durata);
        this.setLuminosita(50);
        this.setVolume(50);
    }

    public int getLuminosita() {
        return luminosita;
    }

    public void setLuminosita(int luminosita) {
        this.luminosita = luminosita;
    }

    @Override
    public void play() {
        super.play();
        for (int i = 0; i < this.getDurata(); i++){

            System.out.print(this.getTitolo());

            for (int j = 0; j < this.getVolume(); j++){

                System.out.print("!");

            }
            for (int z = 0; z < this.getLuminosita(); z++){

                System.out.print("*");
            }
            System.out.println(".");
        }
    }

    @Override
    public void aumentaLuminosita() {
        if (this.getLuminosita()<100){
            luminosita ++;
        }else{
            System.out.println("Luminosità gia al massimo");
        }
    }

    @Override
    public void diminuisciLuminosita() {
        if (this.getLuminosita()>0){
            luminosita --;
        }else{
            System.out.println("Luminosità gia al minimo");
        }
    }
}
