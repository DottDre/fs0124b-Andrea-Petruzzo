package it.epicode.data;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Location extends BaseEntity {
    private String uniqueCode;
    private String description;
    private Type type;
    private Long maxOccupants;
    @ManyToOne
    private Building building;
    private boolean free;
}
