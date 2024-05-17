package it.epicode.data;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Location extends BaseEntity {
    private String uniqueCode;
    private String description;
    @Enumerated(EnumType.STRING)
    private Type type;
    private Long maxOccupants;
    @ManyToOne
    @JoinColumn(name = "building_id")
    private Building building;
    private boolean free;
}
