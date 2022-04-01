import React, { useEffect, useState } from 'react'
import axios from "axios";


import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/SearchBar';
import FlatListConts from '../components/FlatListConts';

export default function MarketScreen({ navigation }: RootTabScreenProps<'TabMarket'>) {
  const [isLoading, setIsLoading] = useState(false);
  const [topCoint, setTopCoint] = useState([]);

  const loadTopCoints = () => {
    setIsLoading(true);

    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
      .then(res => {
        if (res.status == 200) {
          setTopCoint((res.data));
          setIsLoading(false);
        } else {
          console.log("get data fall");
        }
      });
  }
  useEffect(() => {
    loadTopCoints();
  }, []);

  return (
    <View style={styles.container} >
      {/* <SearchBar /> */}
      <Text style={styles.top10}>TOP {topCoint.length}</Text>
      <View style={styles.containerHorizontal}>
        {/* <FlatListConts topCoint={topCoint} navigation={navigation} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    backgroundColor: '#F0F8FF',
  },
  top10: {
    marginTop: 15,
    fontSize: 25,
  },
  containerHorizontal: {
    // backgroundColor: 'yellow',
    width: "100%",
    height: 'auto',
  },
});
