package com.epicode.U5D2.entities;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;

@Getter
public class Pizza extends Item {
	private String name;

	private List<Topping> toppingList;
	private boolean isXl = false;

	public Pizza(String name, List<Topping> toppingList, boolean isXl) {
		super(700, 4.3);
		this.name = name;
		this.toppingList = toppingList;
		this.isXl = isXl;
	}

	@Override
	public int getCalories() {
		return + this.getToppingList().stream().mapToInt(Topping::getCalories).sum();
	}



	@Override
	public double getPrice() {
		return super.getPrice() + this.getToppingList().stream().mapToDouble(Topping::getPrice).sum();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Topping> getToppingList() {
		return toppingList;
	}

	public void setToppingList(List<Topping> toppingList) {
		this.toppingList = toppingList;
	}

	public boolean isXl() {
		return isXl;
	}

	public void setXl(boolean xl) {
		isXl = xl;
	}

	@Override
	public String toString() {
		return "Pizza{" +
				"name='" + name + '\'' +
				", calories=" + calories +
				", price=" + price +
				", toppingList=" + toppingList +
				", isXl=" + isXl +
				'}';
	}
}
