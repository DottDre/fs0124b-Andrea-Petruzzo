package dipendenti;

public abstract class dipendente implements turnoLavoro {
    public static double stipendio;
    private String matricola;
    private dipartimento dipartimento;

    public dipendente( String matricola, double stipendio, dipendenti.dipartimento dipartimento) {
        this.matricola = matricola;
        this.stipendio = stipendio;
        this.dipartimento = dipartimento;
    }
    public abstract double calculateSalary();

    public dipendenti.dipartimento getDipartimento() {
        return dipartimento;
    }

    public void setDipartimento(dipendenti.dipartimento dipartimento) {
        this.dipartimento = dipartimento;
    }

    public String getMatricola() {
        return matricola;
    }
    public static double getStipendio() {
        return stipendio;
    }


    @Override
    public void checkin() {

    }
}
