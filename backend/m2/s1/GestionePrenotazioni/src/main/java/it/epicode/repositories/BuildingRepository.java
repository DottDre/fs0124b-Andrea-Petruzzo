package it.epicode.repositories;

import it.epicode.data.Building;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuildingRepository extends JpaRepository<Building , Long> {
}
