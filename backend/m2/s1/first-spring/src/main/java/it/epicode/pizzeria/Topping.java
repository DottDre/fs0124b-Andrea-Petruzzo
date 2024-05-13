package it.epicode.pizzeria;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Topping extends Item{
    private String nome;

    public Topping(String nome, int calorie, double prezzo) {
        super(calorie, prezzo);
        this.nome = nome;
    }


    @Override
    public String toString() {
        return "Topping{" +
                "calorie=" + calorie +
                ", prezzo=" + prezzo +
                ", nome='" + nome + '\'' +
                '}';
    }
}
