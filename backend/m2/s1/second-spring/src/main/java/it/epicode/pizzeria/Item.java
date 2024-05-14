package it.epicode.pizzeria;

public abstract class Item {
    protected int calorie;
    protected double prezzo;

    public Item(int calorie, double prezzo) {
        this.calorie = calorie;
        this.prezzo = prezzo;
    }
}
