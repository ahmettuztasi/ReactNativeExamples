import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";


export default function StateExample() {
    const [name, setName] = useState('Apple');

    const clickHandler = () => {
        if (name == 'Orange') {
            setName('Apple')
        } else {
            setName('Orange');
        }
    }

    return (
        <View style={styles.container}>
            <Text>*********STATE EXAMPLE*********</Text>
            <Text style={styles.textContainer}>This is {name}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Update State' onPress={clickHandler} />
            </View>
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

    textContainer: {
        marginTop: 50
    },

    buttonContainer: {
        marginTop: 10
    }
});

AppRegistry.registerComponent('StateExample', () => SteateExample);