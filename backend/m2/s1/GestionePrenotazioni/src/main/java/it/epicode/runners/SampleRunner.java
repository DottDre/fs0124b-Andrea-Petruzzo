package it.epicode.runners;

import it.epicode.data.Building;
import it.epicode.data.Location;
import it.epicode.data.Type;
import it.epicode.data.User;
import it.epicode.repositories.BuildingRepository;
import it.epicode.repositories.LocationRepository;
import it.epicode.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleRunner implements CommandLineRunner {
    @Autowired
    UserRepository users;
    @Autowired
    LocationRepository locations;
    @Autowired
    BuildingRepository buildings;
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
                .build());
        var location = locations.save(Location.builder()
                .withBuilding(building)
                .withType(Type.PRIVATE)
                .withFree(true)
                .withDescription("molto bello")
                .withMaxOccupants(20L)
                .withUniqueCode("23343435")
                .build());
    }


}
