import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const CoinItem = ({ item, navigation }) => (
    <TouchableOpacity onPress={() => {
        navigation.navigate(item.tabOpen)
    }} >
        <View style={styles.cardContainer}>
            <View>
                <MaterialIcons name={item.img} size={50} color="black" />
            </View>
            <View>
                <Text style={styles.text}>{item.text}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.text2}>{item.text2}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
    },
    description: {
        // backgroundColor: 'red',
        alignItems: 'center',
        width: '70%',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        // color: 'white',
    },
    text2: {
        textAlign: 'center',
    },
});

export default CoinItem;