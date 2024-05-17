package it.epicode.data;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Reservation extends BaseEntity {
    @OneToOne
    private Location location;
    @ManyToOne
    private User user;
    private LocalDate bookingDate;
    private LocalDate expiryDate;
}
