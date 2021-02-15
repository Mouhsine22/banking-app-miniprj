import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import Colors from '../../constants/Colors';

const TransactionItem = props => {
    return (
        <View style={styles.transaction} onPress={props.onViewDetail}>
            <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                {props.type === 'Credit'? <FontAwesomeIcon icon={faPlusSquare} size={60} color={"#ADFF2F"} /> : <FontAwesomeIcon icon={faMinusSquare} size={60} color={"#FA8072"} /> } 
                </View>
                <View style={styles.info}>
                    {props.type === 'Credit'? <Text style={styles.credit}  > +{props.amount} MAD</Text>: <Text style={styles.debit}  > -{props.amount} MAD</Text> }
                    <Text style={styles.id}> {props.id} - {props.type}</Text>
                </View>
            </View>
            <View style={styles.date}>
                <Text style={styles.date} >Comited on {props.date}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    transaction: {
        justifyContent: 'center',
        elevation: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 100,
        margin: 5
    },
    infoContainer: {
        flexDirection: 'row',
        paddingTop: 20
    },
    iconContainer: {
        paddingHorizontal: 50,
    },
    id: {
        fontSize: 9,
        color: '#555',
        marginLeft: 5
    },
    date: {
        fontSize: 9,
        color: '#555',
        textAlign: 'right',
        padding: 2
    },
    credit: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ADFF2F"
    },
    debit: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FA8072"
    }
});

export default TransactionItem;