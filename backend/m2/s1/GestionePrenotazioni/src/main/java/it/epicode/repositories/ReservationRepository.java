package it.epicode.repositories;

import it.epicode.data.Location;
import it.epicode.data.Reservation;
import it.epicode.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Optional<Reservation> findByUserAndLocationANdDate(User user, Location location, LocalDate date);
}
