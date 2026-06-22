package DesignPrinciplePattern.exercise1;

public class Logger {
    //1 static variable to hold the single instance of logger
    private static Logger instance = null;

    //2 Private constructor, prevents external instantiation 
    private Logger() {
        System.out.println("constructor called, logger instance created");
    }

    //3 Public static method – the only way to get the Logger
    //If instance is null, create it; otherwise return existing one
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
    public void error(String message) {
        System.err.println("[ERROR] " + message);
    }
}