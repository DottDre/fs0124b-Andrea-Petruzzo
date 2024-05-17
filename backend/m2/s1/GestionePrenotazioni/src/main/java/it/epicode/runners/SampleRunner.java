package it.epicode.runners;

import it.epicode.data.*;
import it.epicode.repositories.BuildingRepository;
import it.epicode.repositories.LocationRepository;
import it.epicode.repositories.ReservationRepository;
import it.epicode.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Component
@Slf4j
public class SampleRunner implements CommandLineRunner {
    @Autowired
    UserRepository users;
    @Autowired
    LocationRepository locations;
    @Autowired
    BuildingRepository buildings;
    @Autowired
    ReservationRepository reservations;
    @Override
    public void run(String... args) throws Exception {
        var user = users.save(User.builder()
                .withUsername("DottDre")
                .withFullName("Andrea Petruzzo")
                .withEmail("acqaurius33@gmail.com")
                .build());
        var building = buildings.save(Building.builder()
                .withCity("Roma")
                .withName("atlante")
                .withAddress("atlente@gmail.com")
                .withUser(user)
                .build());
        var location = locations.save(Location.builder()
                .withType(Type.PRIVATE)
                .withFree(true)
                .withDescription("molto bello")
                .withMaxOccupants(20L)
                .withUniqueCode("23343435")
                .withBuilding(building)
                .build());
        var reservation = reservations.save(Reservation.builder()
                .withUser(user)
                .withLocation(location)
                .withBookingDate(LocalDate.now())
                .build());
    }


}
