package it.epicode.pizzeria;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class MyAppConfig {
        @Bean (name =" pommodoro")
        public Topping pommodoro(){
            return new Topping("Pommodoro",0,0);
        }
        @Bean (name = "mozzarella")
            public Topping mozzarella (){
            return new Topping("mozzarella",2,0);
        }
        @Bean (name = "ananas")
            public Topping ananas(){
            return new Topping("ananas", 12,2.5);
        }
        @Bean (name = "margherita")
            public Pizza margerita (){
                List<Topping> t = new ArrayList<>();
                t.add(pommodoro());
                t.add(mozzarella());
                return new Pizza("margerita", 5,6,t);
            }
        @Bean (name = "hawai")
            public Pizza hawai (){
                List<Topping> t = new ArrayList<>();
                t.add(pommodoro());
                t.add(mozzarella());
                t.add(ananas());
                return new Pizza("margerita", 5,12,t);
        }
        @Bean (name = "acqua")
            public Bevande acqua (){
            return new Bevande("acqua", 12, 2);
        }
        @Bean (name = "cocaCola")
            public Bevande cocaCola(){
            return new Bevande("cocaCola", 50, 4);
        }
        @Bean (name = "menu")
            public Menu menu (){
            List<Pizza> listaPizza = new ArrayList<>();
            List<Bevande> listaBevande = new ArrayList<>();
            List<Topping> listaTopping = new ArrayList<>();

            listaPizza.add(margerita());
            listaPizza.add(hawai());

            listaBevande.add(acqua());
            listaBevande.add(cocaCola());

            listaTopping.add(pommodoro());
            listaTopping.add(mozzarella());
            listaTopping.add(ananas());
            return new Menu(listaPizza,listaBevande,listaTopping);
        }

}


