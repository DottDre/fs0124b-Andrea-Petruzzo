package dipendenti;

public class DipendenteFullTime extends dipendente {
    public DipendenteFullTime(String matricola, double stipendio, dipendenti.dipartimento dipartimento) {
        super(matricola, stipendio, dipartimento);
    }
    @Override
    public double calculateSalary() {
        return stipendio;
    }
}
