package DesignPrinciplePattern.exercise1;

public class Test {
    public static void main(String[] args) {
        System.out.println("Singleton Pattern Test");

        // Get the logger multiple times
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        Logger logger3 = Logger.getInstance();

        // Check if all refer to the same object
        System.out.println("\nVerification:");
        System.out.println("logger1 == logger2 ? " + (logger1 == logger2));
        System.out.println("logger2 == logger3 ? " + (logger2 == logger3));
        System.out.println("logger1 == logger3 ? " + (logger1 == logger3));

        // Use the logger
        System.out.println("\nUsing the logger:");
        logger1.log("Application started");
        logger2.log("This is a log from logger2");
        logger3.error("This is an error from logger3");
    }
}


/*************************************** */
/* Expected Output:

Logger instance created (constructor called).

Verification:
logger1 == logger2 ? true
logger2 == logger3 ? true
logger1 == logger3 ? true

Using the logger:
[LOG] Application started
[LOG] This is a log from logger2
[ERROR] This is an error from logger3

---------------------------------------------

The constructor is called only once, confirming that only one instance of Logger is created.



*/