import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompteItem = props => {
    return (
        <View style={styles.compte} onPress = {props.onViewDetail}>
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.RIB} >RIB : {props.RIB}</Text>
            <Text style = {styles.solde} >+MAD {props.solde}</Text>
        </View>
        )
};

const styles = StyleSheet.create({
    compte: {
        alignItems : 'center',
        textAlign : 'center',
        justifyContent : 'center',
        elevation : 5,
        borderRadius : 10,
        backgroundColor: 'white',
        height: 200,
        margin: 20
    },
    title : {
        fontSize : 20,
        marginVertical : 4,
    },
    RIB: {
        fontSize: 10,
        color : '#555'
    },
    solde : {
        marginTop : 20,
        fontSize: 22,
        color : 'black'
    },

  });

  export default CompteItem;