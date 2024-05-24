package it.epicode.services;

import it.epicode.data.Dipendente;

import java.util.List;
import java.util.Optional;

public interface DipendenteService {

        List<Dipendente> getDipendenti();

        Optional<Dipendente> getDipendente(Long id);

        Dipendente save(Dipendente dipendente);

        Dipendente update(Long dipendenteId, Dipendente dipendente);

        Dipendente delete(Long dipendenteId);
}
