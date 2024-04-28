package it.epicode.catalogo;

public class Riviste extends Catalogo{
        private Peridiocita periodicita;

        public Riviste(String titolo, long ISBN, int anno, int pagine, Peridiocita peridiocita) {
                super(titolo, ISBN, anno, pagine);
                this.periodicita = peridiocita;
        }

        public Peridiocita getPeriodicita() {
                return periodicita;
        }

        public void setPeriodicita(Peridiocita periodicita) {
                this.periodicita = periodicita;
        }
}
