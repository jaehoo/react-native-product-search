import { StyleSheet, Text, Image, View } from 'react-native';

export default function Loading(props){

    return(
      <View style={styles.loading}>
        <Text style={styles.label}>Loading....</Text>
        <Image testID="loading" 
        source={require("./../assets/logo192.png")}
        style={{height:100, width:100}}/>
      </View>        
    );

}

const styles = StyleSheet.create({
  loading:{
    flex:1, flexDirection:'column' ,
    backgroundColor: '#778899',
      justifyContent:'center',
      textAlign: 'center',
      alignItems: 'center'
      
  },
  label:{
    color: 'white',
    fontWeight:'bold',
    fontSize: 30,
    marginVertical: 20
  }

});