/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ClampHeader from "./components/ClampHeader.tsx"
import UserProfile from "./components/UserProfile.tsx"
import IndexCard from "./components/IndexCard.tsx"
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const API_DATA = [
    {
        indexName: "WETH-WBTC",
        _id: 1
    },
{
        indexName: "WETH-USDC",
        _id: 2
    },
{
        indexName: "USDC-WBTC",
        _id: 3
    },
{
        indexName: "WETH-WMATIC",
        _id: 4
    },
{
        indexName: "USDC-WMATIC",
        _id: 5
    },
{
        indexName: "WETH-DAI",
        _id: 6
    },
    {
        indexName: "WBTC-WMATIC",
        _id: 7
    },
    {
        indexName: "DAI-WBTC",
        _id: 8
    },
    {
        indexName: "DAI-WBTC-WMATIC",
        _id: 9
    },
    {
        indexName: "DAI-USDC-WBTC",
        _id: 10
    }
]

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [data, setData] = useState([])

   const fetchData = async() => {
    const res = await fetch("https://api.joinclamp.com/v1-1/indexes", {
    method: "GET"
    })
    const json = await res.json()
    console.log(json.data.all_indexes)
    setData(json.data.all_indexes)
//    json.data.all_indexes.forEach((element, index) => {
//        console.log(element)
//    })
   }

//   useEffect(() => {
//    fetchData()
//   }, [])
//
//   console.log(data)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ClampHeader />
        <UserProfile />
        <View
        contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Explore">
            <Text>Buy any crypto index anytime anywhere</Text>
            <View style={styles.flexing}>
            {
                  API_DATA && API_DATA.map((item)=> <IndexCard key={item._id} indexName={item.indexName} id={item._id}/>)
            }
            </View>
         </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
    flexDirection: "column",
    paddingHorizontal: 8
  }
});

export default App;
