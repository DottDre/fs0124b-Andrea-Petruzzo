package cellulare;

import java.util.Arrays;

public class sim {
    private String numero;
    private int credito;
    private calls[] chiamate;

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public int getCredito() {
        return credito;
    }

    public void setCredito(int credito) {
        this.credito = credito;
    }

    public calls[] getChiamate() {
        return chiamate;
    }

    public void setChiamate(calls[] chiamate) {
        this.chiamate = chiamate;
    }
    public sim(String n){
        this.numero = n;
        this.credito = 0;
        this.chiamate = new calls[0];
    }
    public void stampaSim (){
        System.out.println("questo è il numero " + this.getNumero());
        System.out.println( "questo è il credito " + this.getCredito());
        System.out.println("questo sono le chiamte" + Arrays.toString(this.getChiamate()));
    }

}
