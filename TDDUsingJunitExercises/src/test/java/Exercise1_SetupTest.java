import org.junit.Test;
import static org.junit.Assert.*;

public class Exercise1_SetupTest {

    // This is a basic test to verify your JUnit setup works
    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals("2+3 should be 5", 5, result);
    }
}