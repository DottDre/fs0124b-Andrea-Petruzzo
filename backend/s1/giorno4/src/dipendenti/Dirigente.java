package dipendenti;

public class Dirigente extends dipendente{
    private double salarioAnnuo;
    public Dirigente(String matricola, double salarioAnnuo, dipendenti.dipartimento dipartimento) {
        super(matricola, stipendio, dipartimento);
        this.salarioAnnuo = salarioAnnuo;
    }
    @Override
    public double calculateSalary(){
        return salarioAnnuo / 12;
    }
}
