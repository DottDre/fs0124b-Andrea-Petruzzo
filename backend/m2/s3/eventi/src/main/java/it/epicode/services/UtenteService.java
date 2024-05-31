package it.epicode.services;

import it.epicode.entities.Utente;

import java.util.List;
import java.util.Optional;

public interface UtenteService {

    List<Utente> getUtenti();

    Optional<Utente> getUtente(Long id);

    Utente save(Utente utente);

    Optional<Utente> update(Long utenteId, Utente utente);

    Optional<Utente> delete(Long utenteId);
}
