import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';

export default function FlatListExample({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    const [fruits, setFruits] = useState([
        { name: 'apple', key: '1' },
        { name: 'orange', key: '2' },
        { name: 'grapes', key: '3' },
        { name: 'lime', key: '4' },
        { name: 'melon', key: '5' },
        { name: 'cherry', key: '6' },
        { name: 'pineapple', key: '7' },
        { name: 'strawberry', key: '8' },
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>*********Passing Data Example*****</Text>
            <Text>{navigation.getParam('name')}</Text>

            <Button title='go back IconExample Screen' onPress={pressHandler} />


            <Text style={styles.text}>*********FlatList Example*********</Text>
            <FlatList
                //numColumns={2}
                horizontal
                keyExtractor={(item) => item.key}
                data={fruits}
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.name}</Text>
                }
            />

            <FlatList
                //numColumns={2}
                marginTop={10}
                keyExtractor={(item) => item.key}
                data={fruits}
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.name}</Text>
                }
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 15,
        textAlign: 'center'
    },
    title: {
        marginTop: 20,
        marginLeft: 10
    },
    scrollHorizontal: {
        height: 130,
        marginLeft: 10,
        marginRight: 10,
    },
    scrollVertical: {
        margin: 10,
        alignContent: 'center'
    },
    item: {
        marginTop: 0,
        padding: 30,
        width: 180,
        height: 120,
        backgroundColor: 'pink',
        fontSize: 24,
        marginLeft: 10,
    }
});

AppRegistry.registerComponent('FlatListExample', () => FlatListExample);