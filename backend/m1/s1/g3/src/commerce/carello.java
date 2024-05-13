package commerce;

public class carello {
    private cliente cliente;
    private articolo[] articoli;
    private int costo;

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }

    public articolo[] getArticoli() {
        return articoli;
    }

    public void setArticoli(articolo[] articoli) {
        this.articoli = articoli;
    }

    public commerce.cliente getCliente() {
        return cliente;
    }

    public void setCliente(commerce.cliente cliente) {
        this.cliente = cliente;
    }


}
