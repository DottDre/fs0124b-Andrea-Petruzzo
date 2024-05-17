package it.epicode.data;

import jakarta.persistence.*;
import lombok.*;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Building extends BaseEntity {
    private String Name;
    private String address;
    private String city;
    @ManyToOne
    private User user;
}
