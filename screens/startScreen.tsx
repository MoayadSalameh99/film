import * as React from 'react';
import { Text, View, StyleSheet,Image,Button } from 'react-native';
import Constants from 'expo-constants';
import pic from './assets/image.png';


export default function App() {
  return (
   <View style={styles.container}> 
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={pic} style={{ width: 200, height: 200,alignContent:'center'}} /> 
          </View>

          <View style={{margin:20,}}>
              <Text style={styles.brief}>
              Watch movies online with Movies Anywhere
              </Text>
          </View>


          <View style={{margin:20,}}>
              <Button color={'red'} title='continue' onPress={() => navigation.navigate('movies')}/>
          </View>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  brief:
    { 
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center'
    },


});