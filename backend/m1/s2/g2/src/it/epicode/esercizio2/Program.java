package it.epicode.esercizio2;

import java.util.ArrayList;
import java.util.Random;

public class Program {

    public static ArrayList<Integer> List(int n){

        var lista = new ArrayList<Integer>();

        for (int i = 0; i < n ; i++){
            Random random = new Random();
            int num = random.nextInt( 101);
            lista.add(num);
        }
        return lista;
    }

    private static ArrayList<Integer> Lista2(ArrayList<Integer> list) {
        var Lista = new ArrayList<Integer>();
        Lista.addAll(list);
        Lista.addAll(list.reversed());
        return Lista;
    }

    public static void main(String[] args) {
        var List = (List( 20));
        System.out.println(List);
        System.out.println(Lista2(List));
    }
}