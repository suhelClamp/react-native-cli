import React, {useState, useEffect, useCallback} from 'react';
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

function UserProfile(): React.JSX.Element {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL("https://polygonscan.com/address/0x5de4839a76cf55d0c90e2061ef4386d962E15ae3");

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL("https://polygonscan.com/address/0x5de4839a76cf55d0c90e2061ef4386d962E15ae3");
        } else {
          Alert.alert(`Don't know how to open this URL`);
        }
      }, []);

    return (
    <View style={styles.sectionContainer}>
    <View style={styles.address}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <TouchableOpacity onPress={handlePress}>
        <Text style={styles.sectionTitle}>0xF499D...bCaF8E1</Text>
        </TouchableOpacity>
    </View>
     <View style={styles.netWorth}>
            <TouchableOpacity onPress={handlePress}>
            <Text style={styles.netWorthText}>Net Worth</Text>
            <Text style={styles.netWorthValue}>$1.97</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
    address: {
      display: "flex",
      flexDirection: "row",
    },
    netWorth: {
    marginTop: 8,
          display: "flex",
          flexDirection: "row",
        },
        netWorthText: {
            fontWeight: '600',
            fontSize: 12,
            color: "gray"
        },
        netWorthValue: {
                    fontWeight: '800',
                    fontSize: 24,
                    color: "black"
                },
  image: {
  height: 32,
  width: 32,
  marginRight: 4
  },
  sectionTitle: {
    fontSize: 24,
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
});


export default UserProfile