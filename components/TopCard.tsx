import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import Navigation from '../navigation';

const TopCard = ({ coin, navigation }: any) => (
    <TouchableOpacity onPress={() => {
        navigation.navigate('CointDetails', {
            coinId: coin.id,
            // navigation: navigation,
        });
    }} >
        <View style={styles.TopCard}>
            <View style={styles.top}>
                {/* <Text style={styles.coinName}>{coin.id}</Text> */}
                <Image style={styles.cointLogo} source={{ uri: coin.image }} />
                <Text style={styles.coinRank}>#{coin.market_cap_rank}</Text>
            </View>
            <View style={styles.buttom}>
                <Text numberOfLines={1} style={styles.coinName}>{coin.name}</Text>
                <Text style={styles.coinPrice}>{coin.current_price} $</Text>
                <View style={styles.last24h}>
                    <Text style={[coin.price_change_percentage_24h > 0
                        ? styles.coinPercentUp : styles.coinPercentDown,]}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                    <Ionicons name="ios-stats-chart" size={18}
                        style={[coin.price_change_percentage_24h > 0
                            ? styles.las24IconUp : styles.las24IconDown,]} />
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    //-------------View-------------------
    TopCard: {
        flexDirection: 'column',
        backgroundColor: '#708090',
        width: 170,
        height: 'auto',
        borderRadius: 30,
        margin: 10,
        padding: 10,
    },
    top: {
        backgroundColor: '#708090',
        borderRadius: 30,
        // flexDirection: 'row',
        // alignItems: 'center'
    },
    buttom: {
        borderRadius: 30,
        marginTop: 10,
    },
    last24h: {
        flexDirection: 'row',
    },
    //-------------ITEMS-------------------
    cointLogo: {
        width: 60,
        height: 60,
        marginTop: 5,
        marginLeft: 5,
    },
    coinRank: {
        fontWeight: 'bold',
        // fontSize: 20,
        // color: 'white',
        // marginLeft: 15,
    },
    coinName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    },
    coinPrice: {
        marginLeft: 15,
        fontSize: 22,
        color: '#C0C0C0',
    },
    coinPercentUp: {
        marginLeft: 15,
        fontSize: 22,
        color: '#00FF7F',
    },
    coinPercentDown: {
        marginLeft: 15,
        fontSize: 22,
        color: '#FC4422',
    },
    las24IconUp: {
        color: '#00FF7F',
    },
    las24IconDown: {
        color: '#FC4422',
    },
});

export default TopCard;