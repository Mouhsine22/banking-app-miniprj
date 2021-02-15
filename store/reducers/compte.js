import COMPTE from '../../data/compte-dummy-data';
import TRANSACTIONS from '../../data/transactions-dummy-data';

import Transaction from '../../models/transacation';
import Compte from '../../models/compte';

import { CREATE_TRANSACTION, UPDATE_SOLDE } from '../actions/compte'

const initialState = {
    compte : COMPTE,
    commitedTranscation: TRANSACTIONS,
    alert : " "
};


export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TRANSACTION: {
            const trans = new Transaction('T'+Math.floor(Math.random() * 100000000000), 'C1', action.transactionData.type, action.transactionData.amount, new Date().toISOString());
            if(action.transactionData.type === "Credit"){
                console.log("1");
                state.compte[0].solde = Number(state.compte[0].solde) + Number(action.transactionData.amount);
                state.alert = "A new \"Credit\" operation has been committed !";
            }else if(action.transactionData.type === "Debit"){
                console.log("2");
                const solde = Number(state.compte[0].solde) - Number(action.transactionData.amount);

                if( solde >= 0 ){state.compte[0].solde = solde; state.alert = "A new \"Debit\" operation has been committed !"} 

                else if (solde < 0 ) { state.alert = "You extract bigger number than your walet !";  console.log("3"); return {...state, alert: state.alert}; }  
            }
            
            return {...state, commitedTranscation: [trans].concat(state.commitedTranscation), alert: state.alert }  
        }
        default: {
            return state;       
        }
    }
}