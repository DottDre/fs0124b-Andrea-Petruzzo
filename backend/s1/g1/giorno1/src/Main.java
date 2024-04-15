//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int moltiplica = moltiplicazione(10,20);
        String s = stringa("ciao",20);
        //System.out.println(moltiplica);
        System.out.println(s);
    }
    public static int moltiplicazione(int a, int b){
        int m = a*b ;
        return m;
    }
    public static String stringa(String a, int b ){
        return (a + b);
    }
}




