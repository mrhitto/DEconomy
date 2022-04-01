import React, { useEffect, useState } from 'react'
import axios from "axios";
import { StyleSheet, FlatList, Text } from 'react-native';
import TopCard from './TopCard';


const FlatListConts = ({ topCoint, navigation }: any) => (

    <FlatList
        data={topCoint}
        horizontal
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => {
            return <TopCard coin={item} navigation={navigation} />
        }}
    />
);

const styles = StyleSheet.create({
    top10: {
        marginTop: 15,
        fontSize: 25,
        color: 'white',
    },
});

export default FlatListConts;