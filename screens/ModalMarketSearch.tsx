import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import CoinItem from '../components/Market/Search/CoinItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Ionicons } from '@expo/vector-icons';


export default function ModalMarketSearch(this: any, { route, navigation }: RootTabScreenProps<'ModalMarketSearch'>) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Search"
        });
    });

    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [coinsS, setCoinsS] = useState([]);
    const [searchText, setsearchText] = useState();


    //----------------------------------------------------------------
    const loadCoint = () => {
        setIsLoading(true);

        axios.get(`https://api.coingecko.com/api/v3/search?query=${searchText}`)
            .then(res => {
                if (res.status == 200) {
                    setCoinsS(Object.values(res.data)[0]);
                    setIsLoading(false);
                    console.log("---------");
                    // console.log(searchText);
                } else {
                    console.log("get data fall");
                }
            });
    }
    useEffect(() => {
        loadCoint();
        if (isFirstLoad) {
            loadLastSearch();
            setIsFirstLoad(false);
        }
    }, [searchText]);

    const saveLastSearch = async () => {
        await AsyncStorage.setItem('lastSearch', searchText);
        loadCoint();
    }

    const loadLastSearch = async () => {
        var cosas = await AsyncStorage.getItem('lastSearch');
        if (cosas.length > 0) {
            setsearchText(cosas);
        }
    }

    //----------------------------------------------------------------
    const eraseText = () => {
        console.log("eraseText");
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerSearchbar}>
                <Ionicons name="chevron-back" size={20} color="#dddddd" />
                <View style={styles.SearchbarBackground}>
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={(value: string) => setsearchText(value)}
                        onSubmitEditing={saveLastSearch}
                        autoFocus={true} />
                    <Button
                        onPress={eraseText}
                        title="X"
                        color="#dddddd"
                    />
                </View>
            </View>
            <FlatList
                style={styles.list}
                data={coinsS}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CoinItem coin={item} navigation={navigation} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212020',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        width: "90%",
    },

    //----------------------------------------------------------------
    containerSearchbar: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212020',
        marginTop: 10,
        marginBottom: 10,
    },
    SearchbarBackground: {
        flexDirection: 'row',
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#363637',
    },
    searchbar: {
        color: '#dddddd',
        width: '90%',
        textAlign: 'center',
        fontSize: 25,
    },
});
