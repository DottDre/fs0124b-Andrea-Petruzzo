package dipendenti;

public class DipendentePartTime extends dipendente{
    private double oreLavorate;
    private double salarioOrario;
    public DipendentePartTime(String matricola, double salarioOrario, double oreLavorate, dipendenti.dipartimento dipartimento) {
        super(matricola, stipendio, dipartimento);
        this.oreLavorate = oreLavorate;
        this.salarioOrario = salarioOrario;
    }
    @Override
    public double calculateSalary() {
        return oreLavorate * salarioOrario;
    }
}
