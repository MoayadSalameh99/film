import { Text, View, StyleSheet,Image,Button, Linking } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,} from 'react-native';



const supportedURL = "https://expo.dev/";
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    
    const supported = await Linking.canOpenURL(url);

    if (supported) {
     
      await Linking.openURL(url);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>


       
      {
      isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.cat}>{item.title}, {item.releaseYear}</Text>
            
          )
         
        }
        />
        
      )
      }
           <View style={{margin:50,alignContent:'center',alignItems:'center' ,backgroundColor:'#000000',}}>
          <OpenURLButton url={supportedURL} >Go to Expo website</OpenURLButton>
        </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: 
  {
     flex: 1,
     padding: 50,
     backgroundColor:'#6F1700',
     
     
     
     
  },
  cat:
  {
    
    fontSize:15,
    margin:50 ,
    padding:20,
    textAlign:'center',
    backgroundColor:'#000000',
    color:'#FFF',
     alignItems:"center",
     borderRadius:52,
   
  }
});