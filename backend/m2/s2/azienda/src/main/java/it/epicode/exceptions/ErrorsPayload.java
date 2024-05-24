package it.epicode.exceptions;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Data
public class ErrorsPayload {
	private String message;
	private LocalDateTime timestamp;
}