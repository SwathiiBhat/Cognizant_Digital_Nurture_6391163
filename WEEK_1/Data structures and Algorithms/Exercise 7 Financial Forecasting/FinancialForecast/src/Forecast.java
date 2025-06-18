import java.util.Scanner;

public class Forecast {

    // Recursive method to calculate future value
    public static double predictFutureValueRecursive(double initialValue, double rate, int years) {
        if (years == 0) {
            return initialValue; // base case
        }
        return predictFutureValueRecursive(initialValue, rate, years - 1) * (1 + rate);
    }

    // Iterative method to calculate future value (optimized)
    public static double predictFutureValueIterative(double initialValue, double rate, int years) {
        double futureValue = initialValue;
        for (int i = 1; i <= years; i++) {
            futureValue *= (1 + rate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input from user
        System.out.print("Enter Initial Investment Amount (₹): ");
        double initialAmount = sc.nextDouble();

        System.out.print("Enter Annual Growth Rate (in %): ");
        double ratePercent = sc.nextDouble();
        double rate = ratePercent / 100; // Convert to decimal

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        // Recursive approach
        double recursiveResult = predictFutureValueRecursive(initialAmount, rate, years);
        System.out.printf("\n[Recursive] Future Value after %d years: ₹%.2f\n", years, recursiveResult);

        // Iterative approach
        double iterativeResult = predictFutureValueIterative(initialAmount, rate, years);
        System.out.printf("[Iterative] Future Value after %d years: ₹%.2f\n", years, iterativeResult);
    }
}
