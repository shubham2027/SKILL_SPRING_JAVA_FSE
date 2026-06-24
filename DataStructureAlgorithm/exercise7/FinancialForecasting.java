/**
 * Exercise 7: Financial Forecasting
 * This class demonstrates how to use recursion to predict future financial values.
 */
public class FinancialForecasting {

    /**
     * Recursive method to calculate the future value of an investment.
     * Formula: Future Value = Present Value * (1 + Growth Rate)^Periods
     * 
     * @param presentValue The current value/investment amount
     * @param growthRate The growth rate per period (e.g., 0.05 for 5%)
     * @param periods The number of periods (e.g., years) to forecast
     * @return The projected future value
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        // 1. Base Case: If there are no periods left, the future value is the present value.
        if (periods <= 0) {
            return presentValue;
        }

        // 2. Recursive Case: Calculate the value for the next period,
        // and recursively call this method with one less period.
        double nextValue = presentValue * (1 + growthRate);
        return calculateFutureValue(nextValue, growthRate, periods - 1);
    }

    public static void main(String[] args) {
        // Sample inputs
        double initialInvestment = 1000.0; // Initial amount of money
        double annualGrowthRate = 0.05;    // 5% growth rate annually
        int forecastYears = 10;            // Forecast for 10 years

        System.out.println("--- Financial Forecasting Demo ---");
        System.out.println("Initial Investment: $" + initialInvestment);
        System.out.println("Annual Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecast Period: " + forecastYears + " years");

        // Calculate future value recursively
        double projectedValue = calculateFutureValue(initialInvestment, annualGrowthRate, forecastYears);

        // Print the result formatted to 2 decimal places
        System.out.printf("\nProjected Future Value: $%.2f\n", projectedValue);
    }
}
