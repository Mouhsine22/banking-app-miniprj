import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import InputComponent from '../../components/inputs/InputComponent';
import { useSelector, useDispatch } from 'react-redux';
import * as compteActions from '../../store/actions/compte';

const OperationScreen = props => {

    const alert = useSelector(state => state.compte.alert);
    const [Credit, setCredit] = useState('');
    const [Debit, setDebit] = useState('');

    const CreditHandler = (Credit) => {
        setCredit(Credit);
    };

    const DebitHandler = (Debit) => {
        setDebit(Debit);
    };

    const EmptyDebit = () => {
        setDebit('0');
    };
    const EmptyCredit = () => {
        setCredit('0');
    };
    const dispatch = useDispatch();


    const submitCreditHandler = useCallback(() => {

        Alert.alert(
            "Are you sure ?",
            "Do you really want to make a new Credit ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Valid", onPress: () => {
                        dispatch(
                            compteActions.createTransaction('Credit', Credit)
                        )
                    }
                }
            ],
            { cancelable: false }
        );

    },
        [dispatch, Credit]);


    const submitDebitHandler = useCallback(() => {

        Alert.alert(
            "Are you sure ?",
            "Do you really want to make a new Debit ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Valid", onPress: () => {
                        dispatch(
                            compteActions.createTransaction('Debit', Debit)
                        )
                    }
                }
            ],
            { cancelable: false }
        );


    },
        [dispatch, Debit]);

    useEffect(() => {

    }, [submitCreditHandler, submitDebitHandler])

    const showAlert = () => {
        return Alert.alert(
            "Operation Alert",
            alert,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }


    return (
        <View>
            <Text style = {styles.alert}> {alert}</Text>
            <View><InputComponent title="New Credit Operation" Empty={EmptyCredit} value={Credit} color="#ADFF2F" onChange={CreditHandler} onPress={submitCreditHandler} /></View>
            <View><InputComponent title="New Debit Operation" Empty={EmptyDebit} value={Debit} color="#FA8072" onChange={DebitHandler} onPress={submitDebitHandler} /></View>     
        </View>
    )
};

const styles = StyleSheet.create({
    alert :{
        marginTop : '5%',
        marginLeft : '10%',
        justifyContent: "center",
        color : "red"
    },
});

export default OperationScreen;