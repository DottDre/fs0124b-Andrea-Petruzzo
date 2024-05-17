package com.epicode.U5D2.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Table {
	private int numTable;
	private int numMaxCoperti;
	private boolean isFree;
	private double costoCoperto;


	public void print() {
		System.out.println("numero tavolo--> " + numTable);
		System.out.println("numero massimo coperti--> " + numMaxCoperti);
		System.out.println("occupato/libero--> " + (this.isFree ? "Libero" : "Occupato"));
	}

	public int getNumTable() {
		return numTable;
	}

	public void setNumTable(int numTable) {
		this.numTable = numTable;
	}

	public int getNumMaxCoperti() {
		return numMaxCoperti;
	}

	public void setNumMaxCoperti(int numMaxCoperti) {
		this.numMaxCoperti = numMaxCoperti;
	}

	public boolean isFree() {
		return isFree;
	}

	public void setFree(boolean free) {
		isFree = free;
	}

	public double getCostoCoperto() {
		return costoCoperto;
	}

	public void setCostoCoperto(double costoCoperto) {
		this.costoCoperto = costoCoperto;
	}
}
