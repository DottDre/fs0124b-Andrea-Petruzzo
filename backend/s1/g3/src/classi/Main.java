package classi;

import java.awt.*;

public class Main {
    public static void main(String[] args) {
        Rettangolo rettangolo1 = new Rettangolo();
        Rettangolo rettangolo2 = new Rettangolo();
        rettangolo1.setAltezza(10);
        rettangolo1.setLarghezza(20);
        rettangolo2.setAltezza(40);
        rettangolo2.setLarghezza(50);
        System.out.println(rettangolo1.perimetro());
        System.out.println(rettangolo1.area());
        stampaRettangolo(rettangolo1);
        stampaDueRettangoli(rettangolo1,rettangolo2);
    }
    public static void stampaRettangolo(Rettangolo rettangolo) {
        System.out.println("questa è l'area " + rettangolo.area() + " questo è il perimetro "+ rettangolo.perimetro());
    }

    public static void stampaDueRettangoli(Rettangolo r1, Rettangolo r2){
        int sommArr = r1.area() + r2.area();
        int sommaPer = r2.perimetro() + r2.perimetro();
        System.out.println("questa e l'area del primo " + r1.area() + " questa è l'area del secondo " + r2.area());
        System.out.println("questo è il perimetro del primo " + r1.perimetro() + " questo è il perimetro del secondo " +r2.perimetro());
        System.out.println("questa è la somma dell'area " + sommArr + " e questa del perimetro " + sommaPer );
    }
}