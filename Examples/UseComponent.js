import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text
} from "react-native";
import App from '../App';

export default function UseComponent() {
    const data = 'Use Component';
    return (
        <View style={styles.container}>
            <Text style={styles.text}>**Using Component Example**</Text>
            <App data1={'Ahmet'} data2={'Tuztasi'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop:100,
        padding:50
    }
});
AppRegistry.registerComponent('UseComponent', () => UseComponent);