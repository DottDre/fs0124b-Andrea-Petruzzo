package dipendenti;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        dipendente antonioSchipani = new DipendenteFullTime("schip", 4400, dipartimento.PRODUZIONE);
        dipendente cristianoTurri = new Dirigente("cris", 50000, dipartimento.VENDITE);
        dipendente andreaPetruzzo = new DipendentePartTime("andre", 60, 30, dipartimento.AMMINISTRAZIONE);

        dipendente[] dipendenti = {antonioSchipani, cristianoTurri, andreaPetruzzo};

        for (dipendente dipendente : dipendenti) {
            System.out.println("Matricola: " + dipendente.getMatricola());
        }

        for (dipendente dipendente : dipendenti) {
            System.out.println("Matricola: " + dipendente.getMatricola() + ", Stipendio: " + dipendente.calculateSalary());
        }
        double stipendioTotale = 0;
        for (dipendente dipendente : dipendenti){
            stipendioTotale += dipendente.calculateSalary();
        }
        System.out.println("stipendio totale: " +stipendioTotale);

    }
}