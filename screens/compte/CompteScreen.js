import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CompteItem from '../../components/compte/CompteItem';
import TransactionItem from '../../components/compte/TransactionItem';
import Colors from '../../constants/Colors';

const CompteScreen = props => {
    const compte = useSelector(state => state.compte.compte);
    const commitedTranscation = useSelector(state => state.compte.commitedTranscation)
    return (
        <View>
            <View style={styles.compte}>
                <FlatList data={compte} renderItem={itemData => <CompteItem title={itemData.item.title} RIB={itemData.item.RIB} solde={itemData.item.solde} onViewDetail={() => { }} />} />
            </View>
      
            <View>
                <Text style={styles.title}>Last Commited Transaction</Text>
                <View style={styles.line} ></View>
            </View>
            <FlatList data={commitedTranscation} renderItem={itemData => <TransactionItem id={itemData.item.id} type={itemData.item.type} amount={itemData.item.amount} date={itemData.item.date} onViewDetail={() => { }} />} />
        </View>
    )
};

const styles = StyleSheet.create({
    compte :{
        backgroundColor: Colors.accent,
        marginBottom : 20
    },
    title: {
        fontSize: 15,
        paddingHorizontal: 12
    },
    line: {
        height: 10,
        width: '60%',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: Colors.accent
    }


})

export default CompteScreen;