import React, { useState } from 'react';

import { StyleSheet, FlatList, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Card from '../components/Card';


export default function WalletScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [menus, setReviews] = useState([
        { text: 'Create your wallet', text2: 'New to the decentralized world? \nCreate your seed phrase in the safest way possible with DEconomy!', img: 'create-new-folder', key: '1', tabOpen: "NewWallet", hidden: false },
        { text: 'Connect to your wallet', text2: 'Alredy have a seed phrase? \nConnect to your favorite wallet!', img: 'folder-open', key: '2', tabOpen: "Modal", hidden: false },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={menus}
                    renderItem={({ item }) => {
                        return <Card item={item} navigation={navigation} />
                    }}
                    scrollEnabled={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    list: {
        width: '90%',
        padding: 10,
    },
});


// <View style={styles.container}>
// <FlatList data={reviews} renderItem={({ item }) => (
//     <Card>
//         <View style={styles.cardContainer}>
//             <View style={styles.imgContainer}>
//                 <MaterialIcons name={item.img} size={50} color="black" />
//             </View>
//             <View style={styles.textContainer}>
//                 <Text style={styles.text}>{item.text}</Text>
//             </View>
//             <View style={styles.textContainer}>
//                 <Text style={styles.text}>{item.text}</Text>
//             </View>
//         </View>
//     </Card>
// )} />
// </View>