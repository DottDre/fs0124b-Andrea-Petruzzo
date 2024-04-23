package it.epicode.esercizio1;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("inserisci in numero di parole da inserire:");

        int n = input.nextInt();

        input.nextLine();


        var s = new HashSet<String>();
        var d = new ArrayList<String>();

        for (int i = 0; i < n; i++ ){
            System.out.println("inserisci la parola" +(i) + (":"));
            String word = input.nextLine();
            if(s.add(word)) s.add(word);
            else d.add(word);
        }



        System.out.println("parole duplicate " + d);
        System.out.println("n. di parole distinte " + s.size());
        System.out.println("parole distinte :" + s);


    }
}
