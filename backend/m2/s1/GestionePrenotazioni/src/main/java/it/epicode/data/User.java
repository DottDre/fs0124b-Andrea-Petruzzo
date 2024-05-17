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
public class User extends BaseEntity{
    @Column (name = "user_name")
    private String username;
    @Column (name = "full_name")
    private String fullName;
    @Column (name = "email")
    private String email;


}
