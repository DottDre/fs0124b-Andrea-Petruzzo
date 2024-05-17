package it.epicode.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import lombok.*;


@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")

public class User extends BaseEntity {
    private String username;
    private String fullName;
    private String email;
}