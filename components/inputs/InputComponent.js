import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';
import Colors from '../../constants/Colors';

const InputComponent = props => {


    return (
        <View style={styles.screen} >
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.line} ></View>
            <View style={styles.compte} >
                <TextInput
                    placeholder="Enter a value"
                    value={props.value}
                    onChangeText={props.onChange}
                    style={styles.input}
                />
                <View style={styles.btns}>
                    <View style={styles.btn}><Button title="Valid" color = {props.color} onPress={props.onPress} /></View>
                    <View style={styles.btn}><Button title="Empty" color ={Colors.accent} onPress={props.Empty} /></View>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },
    compte: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 180,
        margin: 10
    },
    line: {
        height: 10,
        width: '60%',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: Colors.accent
    },
    btns : {
        flexDirection : 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 15,
        paddingHorizontal: 12,
    },
    input: {
        height: '20%',
        width: '30%',
        borderBottomColor : 'black',
        borderBottomWidth : 1
    },
    btn: {
        margin : 20,
        flex: 1
    }


});

export default InputComponent;