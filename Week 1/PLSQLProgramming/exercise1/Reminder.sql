DECLARE
BEGIN
    FOR l IN (
        SELECT CustomerID, LoanID
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || l.LoanID ||
            ' for Customer ' || l.CustomerID ||
            ' is due within 30 days.'
        );

    END LOOP;
END;
/