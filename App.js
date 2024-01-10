import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Share, View, Clipboard } from 'react-native';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const [quote, setQuote] = useState({});
 

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data[0])
      })
  }

    , [])

    const getQuote = () => {
      fetch('https://zenquotes.io/api/random')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data[0])
      })
    }

    const copyToClipboard = () => {
      Clipboard.setString(quote.q + " - " + quote.a);
      alert("Quote copied to clipboard");
    };

    
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            quote.q + " - " + quote.a,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
            alert("Quote shared successfully");
          } else {
            // shared
            alert("Quote shared successfully");
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
          alert("Quote not shared");
        }
      } catch (error) {
        alert(error.message);
      }
    }


  return (
    <View style={styles.container}>
      <Text
      style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 20,
      }}
      >Quotey</Text>
     <View
     style={[styles.quotesContainer, 'box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;']}
     >
     <Text
      style={{
        marginBottom: 10,
        fontSize: 24,
        
      }}
     >
      {quote.q}
      </Text>

      <Text
      style={{
        fontStyle: 'italic',
        marginBottom: 10,
        fontSize: 20,
        
      }}
     >
      -  {quote.a}
      </Text>
     </View>

     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button title="Get Quote" onPress={getQuote}/>
        <Button title="Copy Quote" onPress={copyToClipboard}/>
        <Button title="Share Quote" onPress={onShare}/>

      </View>
      <StatusBar style="auto" />

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quotesContainer: {
    // backgroundColor: 'blue',
    
    borderBlockColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 320,
    height: 200,
    
  },
});
