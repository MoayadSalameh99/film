import { Text, View, StyleSheet,Image,Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,} from 'react-native';

export default function movies() {
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
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.cat}>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 50,
     margin:10 ,
     backgroundColor:'#6F1700',
     borderRadius:40,
     
  },
  cat:
  {
    fontSize:15,
    margin:50 ,
    padding:40,
    textAlign:'center',
    backgroundColor:'#000000',
    color:'#FFF',
   borderRadius:200,
   
  }
});