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

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

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
        createUsers();
        createBuildings();
        createLocation();

        User user = users.findById(1L).orElseThrow(() -> new Exception("Utente non trovato"));
        Location location = locations.findById(1L).orElseThrow(() -> new Exception("Postazione non trovata"));
        LocalDate date = LocalDate.now().plusDays(1);

        try {
            makeReservation(user, location, date);
            System.out.println("Prenotazione effettuata con successo" + user.getUsername());
        } catch (Exception e) {
            System.err.println("Impossibile effettuare la prenotazione: " + e.getMessage());
        }

        createReservations();
    }
    private void createUsers() {
        for (int i = 1; i <= 10; i++) {
            users.save(User.builder()
                    .withUsername("username" + i)
                    .withFullName("Nome Cognome" + i)
                    .withEmail("email" + i )
                    .build());
        }
    }

    private void createBuildings() {
        for (int i = 1; i <= 10; i++) {
             buildings.save(Building.builder()
                    .withName("Nome Edificio" + i)
                    .withAddress("Indirizzo Edificio" + i)
                    .withCity("Città" + i)
                    .build());
        }
    }

    private void createLocation() {
        List<Building> building = buildings.findAll();
        Random random = new Random();
        for (int i = 1; i <= 10; i++) {
            Building building1 = building.get(random.nextInt(building.size()));
            locations.save(Location.builder()
                    .withUniqueCode("codice" + i)
                    .withDescription("Descrizione" + i)
                    .withType(Type.PRIVATE)
                    .withMaxOccupants(5L)
                    .withBuilding(building1)
                    .build());
        }
    }

    public  void makeReservation(User user, Location location, LocalDate date) throws Exception {
        if (!isStationAvailable(location, date)) {
            throw new Exception("La postazione non è disponibile.");
        }

        if (hasReservationForDate(user, date)) {
            throw new Exception("Hai già una prenotazione per questa data.");
        }

        reservations.save(Reservation.builder()
                .withUser(user)
                .withLocation(location)
                .withBookingDate(date)
                .build());
    }

    private boolean isStationAvailable(Location station, LocalDate date) {
        int count = locations.countReservationForLocationAndDate(station, date);
        return count == 0;
    }

    private boolean hasReservationForDate(User user, LocalDate date) {
        int count = users.countReservationsForUserAndDate(user, date);
        return count > 0;
    }

    private void createReservations() {
        List<User> user1 = users.findAll();
        List<Location> location = locations.findAll();
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            User user = user1.get(random.nextInt(user1.size()));
            Location location1 = location.get(random.nextInt(location.size()));
            LocalDate date = LocalDate.now().plusDays(random.nextInt(30));
            try {
                makeReservation(user, location1, date);
                System.out.println("Prenotazione effettuata con successo  " + user.getUsername() + " per la postazione " + location1.getUniqueCode());
            } catch (Exception e) {
                System.err.println("Impossibile effettuare la prenotazione " + user.getUsername() + ": " + e.getMessage());
            }
        }
    }
}



