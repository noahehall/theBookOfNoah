package myFirstPackage;

public class Main {
  public static void main(String[] args) {
    // your code
    System.out.println("Hello from Java!");

    // pass in args from cli
    // java com.example.java.Main please print this
    for (String s :
            args) {
              System.out.println(s);
            }
  }
}
