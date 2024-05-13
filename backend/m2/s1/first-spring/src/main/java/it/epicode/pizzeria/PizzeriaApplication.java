package it.epicode.pizzeria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class PizzeriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PizzeriaApplication.class, args);

		var ctx = new AnnotationConfigApplicationContext(MyAppConfig.class);
		var menu1 = (Menu)ctx.getBean("menu");

		System.out.println(menu1);
		ctx.close();
	}

}
