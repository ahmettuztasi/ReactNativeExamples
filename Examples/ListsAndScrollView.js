import React, { useState } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";


export default function ListsAndScrollView() {

    const [people, setPeople] = useState([
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
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>*********Lists & ScrollView Examples*********</Text>

            <ScrollView horizontal={true} style={styles.scrollHorizontal} showsHorizontalScrollIndicator={true} >
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>

            <ScrollView style={styles.scrollVertical} showsVerticalScrollIndicator={false}>
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
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
        backgroundColor: 'pink',
        fontSize: 24
    }
});

AppRegistry.registerComponent('ListAndScrollView', () => ListsAndScrollView);