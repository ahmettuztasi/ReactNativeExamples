import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

//TERMMINAL COMMANDS
//$npm install react-native-vector-icons --save
//$react-native link
    //if not working this command for security policy try this:
        //run powershell as administirator
            //Set-ExecutionPoliciy RemoteSigned
                //run terminal again
                    //react-native link
                //go back to powershell
        //Set-ExecutionPolicy Restricted
    //and all done..

export default function IconExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>**Icon Example**</Text>
            <Icon name="home" size={30} color="#900" />
            <Icon name="rocket" size={30} color="#900" />
            <Icon name="backward" size={30} color="#900" />
            <Icon name="forward" size={30} color="#900" />
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
AppRegistry.registerComponent('IconExample', () => IconExample);