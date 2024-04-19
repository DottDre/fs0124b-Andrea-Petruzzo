package it.epicode.media;

public class Immagine extends EleMultimediale implements MetodiVisibili{
    private int luminosita;


    public int getLuminosita() {
        return luminosita;
    }

    public void setLuminosita(int luminosita) {
        this.luminosita = luminosita;
    }



    public void show(){
        System.out.print(this.getTitolo());
        for (int i = 0; i < this.getLuminosita(); i++){
            System.out.print("*");
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

