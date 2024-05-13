package it.epicode;

import it.epicode.classi.Libro;
import it.epicode.service.fileCatalogo;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {


        var file = new fileCatalogo();

        var libro1 = new Libro("forzaRoma",100,2016,"andrea","fantasy");
        file.save(libro1);
        System.out.println(file.getByTitolo("forza"));
    }
}