import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, SafeAreaView, ScrollView, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import axios from "axios";
import { RootTabScreenProps } from '../types';
import CointDetailsMarket from '../components/Market/Details/CointDetailsMarket';
import DescriptionReadMore from '../components/Market/Details/DescriptionReadMore';

export default function CointDetailsScreen({ route, navigation }: RootTabScreenProps<'TabContDetails'>) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "#" + coint.market_cap_rank + " " + coint.name
        });
    });

    const { coinId }: any = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [coint, setCoint] = useState(
        {
            name: "", market_cap_rank: "", current_price: "", webSite: "",
            ath: "", ath_change_percentage: "", ath_date: "", market_cap: "",
            description: "", image: "", total_supply: "", max_supply: "",
            circulating_supply: "", last_updated: "", fully_diluted_valuation: "",
            total_volume: "",
        });

    const formatDate = (date: string) => {
        let dateV = new Date(date)
        return dateV.getDay() + "/" + dateV.getMonth() + "/" + dateV.getFullYear() + " - " + dateV.getMinutes() + ":" + dateV.getHours();
    }

    const loadCoint = () => {
        setIsLoading(true);

        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => {
                if (res.status == 200) {
                    let dateV;
                    coint.name = res.data.name;
                    coint.description = res.data.description.en;
                    coint.market_cap_rank = res.data.market_cap_rank;
                    coint.webSite = res.data.links.homepage[0];
                    coint.current_price = res.data.market_data.current_price.usd;
                    coint.ath = res.data.market_data.ath.usd;
                    coint.ath_change_percentage = res.data.market_data.ath_change_percentage.usd;
                    coint.ath_date = formatDate(res.data.market_data.ath_date.usd);
                    coint.market_cap = res.data.market_data.market_cap.usd;
                    coint.total_supply = res.data.market_data.total_supply;
                    coint.max_supply = res.data.market_data.max_supply;
                    coint.circulating_supply = res.data.market_data.circulating_supply;
                    coint.last_updated = formatDate(res.data.market_data.last_updated);
                    coint.fully_diluted_valuation = res.data.market_data.fully_diluted_valuation.usd;
                    coint.total_volume = res.data.market_data.total_volume.usd;

                    coint.image = res.data.image.thumb;
                    //--Add more market_data


                    //------------
                    setIsLoading(false);
                    console.log("---------");

                } else {
                    console.log("get data fall");
                }
            });
    }
    useEffect(() => {
        loadCoint();
    }, []);


    const dollarUSLocale = Intl.NumberFormat('es-ES');

    return (
        <View style={styles.container}>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <View style={styles.topInfo}>
                <Text style={styles.coinName}>{coint.name}</Text>
                <Text style={styles.cointPrice}>{dollarUSLocale.format(coint.current_price)}US$</Text>
            </View>

            <View>
                <Image style={styles.cointLogo} source={{ uri: "https://cdn.statcdn.com/Statistic/1060000/1061031-blank-754.png" }} />
            </View>
            <DescriptionReadMore coint={coint} readMore={readMore} setReadMore={setReadMore} />
            <View style={styles.separator} lightColor="#eee" darkColor="#708090" />
            <CointDetailsMarket coint={coint} />
        </View>
    );
}

const styles = StyleSheet.create({
    cointLogo: {
        width: 400,
        height: 250
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '90%',
    },
    containerT: {
        height: 60,
    },

    scrollView: {
        width: '100%',
        backgroundColor: '#708090',
    },
    //-------

    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    //------Views-----------
    topInfo: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#708090',
    },
    //------ITEMS-----------
    coinName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    },
    cointPrice: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginLeft: 15,
    },
});
