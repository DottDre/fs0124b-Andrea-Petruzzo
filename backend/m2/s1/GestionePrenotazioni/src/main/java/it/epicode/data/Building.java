package it.epicode.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Building extends BaseEntity {
    @Column(name = "name")
    private String Name;
    private String address;
    private String city;
    private User user;
}
