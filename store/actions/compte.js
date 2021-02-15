export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';

export const createTransaction = (type, amount) => {
    return {
        type: CREATE_TRANSACTION,
        transactionData: {
            type,
            amount,
        }
    }
}