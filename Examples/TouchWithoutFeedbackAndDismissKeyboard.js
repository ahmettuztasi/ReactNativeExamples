import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { TextInput } from 'react-native-gesture-handler';

export default function TouchWithoutFeedbackAndDismissKeyboard() {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.text}>TouchableWithoutFeedback And DismissKeyboard Example</Text>
                <TextInput
                    style={styles.input}
                    placeholder='text' />

            </View>
        </TouchableWithoutFeedback>
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
        marginTop: 100,
        padding: 10,
        textAlign: 'center'
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
AppRegistry.registerComponent('TouchWithoutFeedbackAndDismissKeyboard', () => TouchWithoutFeedbackAndDismissKeyboard);