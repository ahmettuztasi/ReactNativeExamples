import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';


export default function TouchableExample() {

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
    
    const pressHandler = (key) => {
        console.log(key);
        setFruits((prevFruits) => {
            return prevFruits.filter(fruit => fruit.key != key)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>*********Tocuhable Example*********</Text>

            <FlatList
                //numColumns={2}
                keyExtractor={(item) => item.key}
                data={fruits}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => pressHandler(item.key)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
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
        width: 150,
        backgroundColor: 'pink',
        fontSize: 24,
        marginLeft: 10,
    }
});

AppRegistry.registerComponent('TouchableExample', () => TouchableExample);