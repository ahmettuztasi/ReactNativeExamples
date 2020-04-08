import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Alert,
    Button
} from "react-native";

const showAlert = () => {
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )
}

export default function AlertExample() {

    return (
        <View>
            <Text>**Alert Example**</Text>
            <Button
                onPress={showAlert}
                title="Show Alert"
            />
        </View>
    );
}
AppRegistry.registerComponent('AlertExample', () => AlertExample);