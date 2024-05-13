package it.epicode.pizzeria;

import java.util.List;

public class Pizza extends Item {
    private String nome;
    private List<Topping> listaTopping;

    public Pizza(String nome ,int calorie, double prezzo, List<Topping> listaTopping) {
        super(calorie, prezzo);
        this.nome = nome;
        this.listaTopping = listaTopping;
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "nome='" + nome + '\'' +
                ", listaTopping=" + listaTopping +
                ", calorie=" + calorie +
                ", prezzo=" + prezzo +
                '}';
    }
}
