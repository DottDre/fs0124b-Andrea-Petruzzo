package it.epicode.pizzeria;

import java.util.List;

public class Menu {
    private List<Pizza> listaPizze;
    private List<Bevande> listaBevande;
    private List<Topping> listaTopping;

    public Menu(List<Pizza> listaPizze, List<Bevande> listaBevande, List<Topping> listaTopping) {
        this.listaPizze = listaPizze;
        this.listaBevande = listaBevande;
        this.listaTopping = listaTopping;
    }
   
    public List<Pizza> getListaPizze() {
        return listaPizze;
    }

    public List<Bevande> getListaBevande() {
        return listaBevande;
    }

    public List<Topping> getListaTopping() {
        return listaTopping;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "listaPizze=" + listaPizze +
                ", listaBevande=" + listaBevande +
                ", listaTopping=" + listaTopping +
                '}';
    }
}
