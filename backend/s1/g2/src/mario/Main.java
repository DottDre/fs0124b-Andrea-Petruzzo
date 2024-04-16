package mario;

import javax.swing.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static boolean PariDisperi (String p) {
        return p.length() % 2 == 0;
    }
    public static boolean annoBisestile(int anno) {
        if (anno % 400 == 0) {
            return true;
        } else if (anno % 4 == 0 && anno % 100 != 0) {
            return true;
        } else {
            return false;
        }
    }
    public static String stampa(int num) {
        String res;
        switch (num) {
            case 0: {
                res = "zero";
                break;
            }
            case 1: {
                res = "uno";
                break;
            }
            case 2: {
                res = "due";
                break;
            }
            case 3: {
                res = "tre";
                break;
            }
            default:
                res = "non va bene";
        }
        return res;
    }

    public static void main(String[] args) {
        boolean result = PariDisperi("parola");
        System.out.println(result);
        boolean result2 = annoBisestile( 2022);
        System.out.println(result2);

    }


}

