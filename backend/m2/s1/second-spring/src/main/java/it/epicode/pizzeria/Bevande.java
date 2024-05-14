package it.epicode.pizzeria;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bevande extends Item{
    private String nome;

    public Bevande(String nome, int calorie, double prezzo) {
        super(calorie, prezzo);
        this.nome = nome;
    }


    @Override
    public String toString() {
        return "Bevande{" +
                "calorie=" + calorie +
                ", prezzo=" + prezzo +
                ", nome='" + nome + '\'' +
                '}';
    }
}
