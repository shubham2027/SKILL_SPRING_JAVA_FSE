-- Stored Procedure to transfer funds between two accounts
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_acc_id IN NUMBER,
    p_to_acc_id IN NUMBER,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    -- Check if transfer amount is positive
    IF p_amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Transfer amount must be greater than zero.');
    END IF;

    -- Retrieve the balance of the source account
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_acc_id;

    -- Check if there are sufficient funds
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for the transfer.');
    END IF;

    -- Debit from the source account
    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_acc_id;

    -- Credit to the target account
    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_acc_id;

    -- Commit the transaction to ensure atomicity
    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_amount || ' from Account ' || p_from_acc_id || ' to Account ' || p_to_acc_id);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: One of the accounts does not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error transferring funds: ' || SQLERRM);
END;
/
