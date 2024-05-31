package it.epicode.services;

import it.epicode.entities.Utente;
import it.epicode.repositories.UtenteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
@Service
@Slf4j
public class UtenteServiceImpl implements UtenteService {
    @Autowired
    UtenteRepository utenti;

    @Override
    public List<Utente> getUtenti() {
        return utenti.findAll();
    }

    @Override
    public Optional<Utente> getUtente(Long id) {
        try {
            return utenti.findById(id);
        }catch (Exception ex){
            log.error(String.format("utente con id = non trovato",id),ex);
            return Optional.empty();
        }
    }

    @Override
    public Utente save(Utente utente) {
        try {
            return utenti.save(utente);
        }catch (Exception ex){
            log.error(String.format("salvataggio non riuscito di",utente),ex);
            return null;
        }
    }

    @Override
    public Optional<Utente> update(Long utenteId, Utente utente) {
        try{
            var ute = utenti.findById(utenteId).orElseThrow();
            ute.builder()
                    .withNome(ute.getNome())
                    .withEmail(ute.getEmail())
                    .withPassword(ute.getPassword())
                    .build();
            return Optional.of(utenti.save(ute));
        }
        catch (NoSuchElementException ex){
            log.error(String.format("utente con id = %s non trovato", utenteId), ex);
        }
        return Optional.empty();

    }

    @Override
    public Optional<Utente> delete(Long utenteId) {
         try{
            var ute = utenti.findById(utenteId).orElseThrow();
            utenti.delete(ute);
            return Optional.of(ute);
        }catch (NoSuchElementException ex){
            log.error(String.format("utente non trovato con id = %s",utenteId),ex);
            throw new RuntimeException("non trovo l'utente...");
        }catch (Exception ex){
            log.error(String.format("errore eliminazione utente con id = %s",utenteId),ex);
            throw new RuntimeException();
        }
    }
}


