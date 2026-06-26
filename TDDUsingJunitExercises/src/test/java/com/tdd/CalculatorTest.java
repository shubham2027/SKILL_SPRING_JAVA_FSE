package com.tdd;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private final Calculator calculator = new Calculator();

    @Test
    public void addTwoNumbers() {
        assertEquals(8, calculator.add(5, 3));
    }

    @Test
    public void subtractTwoNumbers() {
        assertEquals(2, calculator.subtract(5, 3));
    }
}