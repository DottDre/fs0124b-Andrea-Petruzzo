package it.epicode.repositories;

import it.epicode.data.Dispositivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DispositvoRepository extends JpaRepository<Dispositivo, Long>, PagingAndSortingRepository<Dispositivo, Long> {
}
