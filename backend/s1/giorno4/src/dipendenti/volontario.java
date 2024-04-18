package dipendenti;

public abstract class volontario implements turnoLavoro{
    private String nome;
    private int età;
    private String cv;

    public volontario(String nome, int età, String cv) {
        this.nome = nome;
        this.età = età;
        this.cv = cv;
    }

    @Override
    public void checkin() {
    }
}
