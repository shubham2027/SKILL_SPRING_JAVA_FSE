-- Stored Procedure to update employee salary with a bonus percentage for a given department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept_id IN NUMBER,
    p_bonus_pct IN NUMBER
) AS
BEGIN
    -- Update salary by adding the bonus percentage
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE DepartmentID = p_dept_id;

    -- Commit the transaction to save changes
    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_pct || '% applied to employees in Department ID: ' || p_dept_id);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonuses: ' || SQLERRM);
END;
/
