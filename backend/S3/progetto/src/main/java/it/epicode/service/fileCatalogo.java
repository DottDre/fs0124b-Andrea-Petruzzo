package it.epicode.service;

import it.epicode.classi.Catalogo;
import it.epicode.classi.Prestito;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

public class fileCatalogo implements CatalogoInterface{
    private static final Logger log = LoggerFactory.getLogger(fileCatalogo.class);

    protected EntityManagerFactory emf = Persistence.createEntityManagerFactory("catalogo");

    protected EntityManager em = emf.createEntityManager();

    public void save(Catalogo cat){
        var t = em.getTransaction();
        t.begin();
        em.persist(cat);
        t.commit();
    }

    @Override
    public void removeByISBN(Integer ISBN) {
        try {
            Catalogo cat = em.find(Catalogo.class, ISBN);
            if(cat != null){
                var t = em.getTransaction();
                t.begin();
                em.remove(cat);
                t.commit();
                log.info("Prodotto rimosso con successo");
            }else{
                log.warn("nessun prodotto trovato");
            }
        }catch (Exception e){
            log.error("errore durante la rimozione");
        }
    }

    @Override
    public Optional<Catalogo> getByISBN(Integer ISBN) {
        try {
            var query = em.createNamedQuery("GET_BY_ISBN");
            query.setParameter("ISBN", ISBN);
            var cat = (Catalogo) query.getSingleResult();
            return Optional.of(cat);
        }catch (Exception e){
            log.error("elemento inesistente",e);
            return Optional.empty();
        }
    }

    @Override
    public List<Catalogo> getByAnno(Integer anno) {
            try {
                var query = em.createNamedQuery("GET_BY_ANNO");

                query.setParameter("ANNOPUBBLICAZIONE", anno);

                List<Catalogo> res = query.getResultList();

                return res;

            }catch (Exception e) {
                log.error("Nessun libro uscito in questo anno", e);
                return null;
            }
    }

    @Override
    public List<Catalogo> getByAutore(String autore) {
        try {
            var query = em.createNamedQuery("GET_BY_AUTORE");

            query.setParameter("AUTORE", autore);

            List<Catalogo> res = query.getResultList();

            return res;

        }catch (Exception e) {
            log.error("Elemento inesistente", e);
            return null;
        }
    }

    @Override
    public List<Catalogo> getByTitolo(String titolo) {
        try {
            var query = em.createNamedQuery("GET_BY_TITOLO");

            query.setParameter("TITOLO", titolo);

            List<Catalogo> res = query.getResultList();

            return res;

        }catch (Exception e) {
            log.error("Elemento inesistente", e);
            return null;
        }
    }

    @Override
    public List<Catalogo> getElementiInPrestito(Integer numeroTessera) {
        return List.of();
    }

    @Override
    public List<Prestito> getPrestitiScadutiNonRestituiti() {
        return List.of();
    }
}
