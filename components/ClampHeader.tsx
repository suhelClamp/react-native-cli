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

function ClampHeader(): React.JSX.Element {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL("https://joinclamp.com");

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL("https://joinclamp.com");
        } else {
          Alert.alert(`Don't know how to open this URL`);
        }
      }, []);

    return (
    <View style={styles.sectionContainer}>
    <View style={styles.address}>
        <TouchableOpacity onPress={handlePress}>
        <Text style={styles.sectionTitle}>Clamp</Text>
        </TouchableOpacity>
    </View>
    <Button title={"More"}  />
    </View>
    )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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


export default ClampHeader