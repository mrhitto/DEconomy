import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const DescriptionReadMore = ({ coint, readMore, setReadMore }: any) => (
    <View style={[readMore ? styles.desplegableOn : styles.desplegableOff ]}>
        <ScrollView>
            <Text style={styles.textStyle}>
                {coint.description}
            </Text>
        </ScrollView>
        <View style={styles.readMoreIcon}>
            <MaterialIcons name="unfold-more" size={40} color="blue"
                onPress={() => {
                    readMore ?
                        setReadMore(false) :
                        setReadMore(true);
                }} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    desplegableOff: {
        width: '100%',
        height: 38,
        backgroundColor: '#708090',
    },
    desplegableOn: {
        width: '100%',
        height: 200,
        backgroundColor: '#708090',
    },
    textStyle: {
        fontSize: 20,
    },
    readMoreIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default DescriptionReadMore;