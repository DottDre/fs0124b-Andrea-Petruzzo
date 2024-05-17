package it.epicode.repositories;

import it.epicode.data.Location;
import it.epicode.data.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
    @Query("SELECT COUNT(r) Reservation r WHERE r.location = :location AND r.date =:date")
    int countReservationForLocationAndDate(@Param("location") Location location, @Param("date") LocalDate date);

    List<Location> findByBuildingCityAndTypeAndFree(String building, Type type, boolean free);
}
