import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

// The Calculator class we are testing (defined here for simplicity)
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

public class Exercise4_AAATest {

    private Calculator calculator;

    // SETUP: Runs before EVERY test method
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }

    // TEARDOWN: Runs after EVERY test method
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete.");
    }

    // TEST using Arrange-Act-Assert (AAA) pattern
    @Test
    public void testAddition_WithPositiveNumbers() {
        // 1. ARRANGE (Set up inputs)
        int num1 = 10;
        int num2 = 20;

        // 2. ACT (Execute the method being tested)
        int result = calculator.add(num1, num2);

        // 3. ASSERT (Verify the outcome)
        assertEquals("10 + 20 must equal 30", 30, result);
    }
}