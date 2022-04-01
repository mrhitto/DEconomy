import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const dollarUSLocale = Intl.NumberFormat('es-ES');

const CointDetailsMarket = ({ coint }: any) => (


    <View style={styles.general}>
        <View style={styles.generalInfo}>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Market Cap</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.market_cap)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Fully Diluted Valuation</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.fully_diluted_valuation)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Total Volume</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.total_volume)}</Text>
            </View>
        </View>
        <View style={styles.generalInfo}>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>All Time High</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.ath)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Since ATH</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.ath_change_percentage)}%</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>All Time High Day</Text>
                <Text style={styles.generalInfoItemBottom}>{(coint.ath_date)}</Text>
            </View>
        </View>
        <View style={styles.generalInfo}>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Total Supply</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.total_supply)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Current Supply</Text>
                <Text style={styles.generalInfoItemBottom}>{dollarUSLocale.format(coint.circulating_supply)}</Text>
            </View>
            <View style={styles.generalInfoItem}>
                <Text style={styles.generalInfoItemTop}>Last Updated</Text>
                <Text style={styles.generalInfoItemBottom}>{(coint.last_updated)}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    general: {
        flexDirection: 'column',
        width: '90%',
    },
    generalInfo: {
        padding: 10,

    },
    generalInfoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    generalInfoItemTop: {
        fontSize: 16,
        color: 'grey',
    },
    generalInfoItemBottom: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
});

export default CointDetailsMarket;