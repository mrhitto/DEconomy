import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = () => (
    <View style={styles.searchbarContainer}>
        <TextInput
            style={styles.searchbar}
        // onChangeText={onChangeNumber}
        // value={number}
        // placeholder="Coint name"
        />
        <FontAwesome name="search" size={30} color="#F8F8FF" />
    </View>
);

const styles = StyleSheet.create({
    searchbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '6%',
        marginTop: 15,
    },
    searchbar: {
        backgroundColor: '#F8F8FF',
        color: '#000',
        width: '85%',
        height: '100%',
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 30,
    },
});

export default SearchBar;