package singleton;

public class Logger {
    // Step 1: Create a private static instance of the same class
    private static Logger instance;

    // Step 2: Private constructor to prevent instantiation from other classes
    private Logger() {
        System.out.println("Logger Initialized");
    }

    // Step 3: Public method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Sample method for demonstration
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
