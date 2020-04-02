import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";


export default function TextInputExample() {
    const [name, setName] = useState('Apple');
    const [age, setAge] = useState('4');

    return (
        <View style={styles.container}>
            <Text>*********TEXT INPUT EXAMPLE*********</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder='name'
                onChangeText={(val) => setName(val)} />

            <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='age'
                onChangeText={(val) => setAge(val)} />

            <Text>name: {name}, age: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#777',
        padding: 0,
        paddingLeft: 4,
        margin: 0,
        width: 200
    }
});

AppRegistry.registerComponent('TextInputExample', () => TextInputExample);