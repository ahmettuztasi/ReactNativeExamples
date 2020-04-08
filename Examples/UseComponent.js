import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet
} from "react-native";
import App from '../App';

export default function UseComponent() {
    return (
        <View style={styles.container}>
            <App/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
AppRegistry.registerComponent('UseComponent', () => UseComponent);