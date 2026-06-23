-- Example 1: Use IF / ELSIF / ELSE to classify a number as positive, negative, or zero.
DECLARE
    num NUMBER := 10;
BEGIN
    -- Check whether the value is greater than zero.
    IF num > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Positive Number');
    -- Check whether the value is less than zero.
    ELSIF num < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Negative Number');
    -- If neither condition matches, the number must be zero.
    ELSE
        DBMS_OUTPUT.PUT_LINE('Zero');
    END IF;
END;
/


-- Example 2: Use MOD to test whether a number is even or odd.
DECLARE
    num NUMBER := 15;
BEGIN
    -- MOD(num, 2) returns the remainder after dividing by 2.
    IF MOD(num, 2) = 0 THEN
        DBMS_OUTPUT.PUT_LINE('Even Number');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Odd Number');
    END IF;
END;
/






-- Example 3: Use a WHILE loop to print numbers from 1 to 5.
DECLARE
    i NUMBER := 1;
BEGIN
    -- The loop keeps running while the condition remains true.
    WHILE i <= 5 LOOP
        DBMS_OUTPUT.PUT_LINE(i);
        -- Increment the counter so the loop eventually stops.
        i := i + 1;
    END LOOP;
END;
/