class Transaction {
    constructor(id, ownerId, type, amount, date) {
        this.id = id;
        this.ownerId = ownerId;
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
}

export default Transaction;