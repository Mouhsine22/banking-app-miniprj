import Transaction from '../models/transacation';

const TRANSACTIONS = [
        new Transaction(
                'T475257781',
                'C1',
                'Credit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                'T2542452541',
                'C1',
                'Debit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                'T0010525525',
                'C1',
                'Credit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                'T00012452543',
                'C1',
                'Debit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                'T0021200163',
                'C1',
                'Debit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                'T010002068',
                'C1',
                'Debit',
                100,
                new Date().toISOString()
        ),
        new Transaction(
                '0T0000188',
                'C1',
                'Debit',
                100,
                new Date().toISOString()
        ),

];

export default TRANSACTIONS;