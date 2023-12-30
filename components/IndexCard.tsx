import React, {useState, useEffect, useCallback} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Button,
  View,
  Linking,
  Alert,
  Image
} from 'react-native';
import USDTImage from '../assets/USDT.webp';
import USDCImage from '../assets/USDC.webp';
import MATICImage from '../assets/MATIC.webp';
import WMATICImage from '../assets/WMATIC.webp';
import WETHImage from '../assets/WETH.webp';
import WBTCImage from '../assets/WBTC.webp';
import DAIImage from '../assets/DAI.webp';

type IndexPropTypes = PropsWithChildren<{
  indexName: string
      id: string
}>;

function IndexCard({indexName, id}: IndexPropTypes): React.JSX.Element {
    const tokens = indexName.split("-")
    const _width = 100/tokens.length
    const width = _width.toString()
    return (
    <View style={styles.sectionContainer}>
    <View style={styles.header}>
        {tokens.map((item, index) => (
            <View key={index} style={{backgroundColor: COLORS[item], width: width+"%" , height: 5}}></View>
        ))}
    </View>
    <Text style={styles.sectionTitle}>{indexName}</Text>
    <View>
        <Text style={{marginTop: 16}}>Underlying Tokens</Text>
        <View style={{display: "flex", flexDirection: "row", marginTop: 8}}>
        {tokens.map((item, index) => (
                    <Image key={index} style={styles.image}  source={getImage(item)} />
                ))}
        </View>
    </View>
    </View>
    )
}

const getImage = (name: string) => {
    switch (name) {
        case "USDT":
            return USDTImage;
        case "USDC":
            return USDCImage;
        case "MATIC":
            return MATICImage;
        case "WMATIC":
            return WMATICImage;
        case "WETH":
            return WETHImage;
        case "WBTC":
            return WBTCImage;
        case "DAI":
            return DAIImage;
        default:
            // Handle default case or return a placeholder image
            return null;
    }
}

const styles = StyleSheet.create({
header: {
    height: 6,
    width: 250,
    display: "flex",
    flexDirection: "row"
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
    address: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
  image: {
  height: 32,
  width: 32,
  marginRight: 4
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: "black"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  flexing: {
      display: "flex",
      flexDirection: "row",
    }
});

const COLORS = {
    "DAI" : "yellow",
    "MATIC": "purple",
    "USDC": "blue",
    "USDT": "green",
    "WBTC": "orange",
    "WETH": "red",
    "WMATIC": "purple"
}

export default IndexCard