package it.epicode;

import it.epicode.media.Audio;
import it.epicode.media.Immagine;
import it.epicode.media.Video;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Video rickroll = new Video("rick", 5);
        Audio fred = new Audio("fred", 6);
        Immagine labarbadiFred = new Immagine("barba");
        rickroll.play();
        rickroll.aumentaVolume();
        rickroll.aumentaLuminosita();
        rickroll.play();
        rickroll.aumentaVolume();
        rickroll.diminuisciLuminosita();
        rickroll.play();

        fred.aumentaVolume();
        fred.play();
        fred.diminuisciVolume();
        fred.play();


        labarbadiFred.aumentaLuminosita();
        labarbadiFred.show();
        labarbadiFred.aumentaLuminosita();
        labarbadiFred.show();
    }
}