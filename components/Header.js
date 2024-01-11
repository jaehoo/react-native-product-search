import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header(props){

    return (
        <View testID="cabecera" style={styles.cabecera}>
            {/* <Image testID="logo" 
            source={require("../assets/logo192.png")}
            style={{height:50, width:50}} /> */}

            <Image testID="logo" style={styles.image} source={require('../assets/logo192.png')} />
            <Text testID="mensaje" style={styles.title}>Bienvenido a la página de JOSE ALBERTO SANCHEZ</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
      width: 50,
      height: 50,
      
        // flexDirection:'row',
        // margin: 10
    },
    cabecera:{
        
        flexDirection:'row',
        // height:50,
        backgroundColor: '#778899',
        justifyContent:'center',
        textAlign: 'center',
        alignItems: 'center'
        
    },
    title:{
        // flex:5,
        // flexDirection:'row',
        color: 'white',
        fontWeight: 'bold',
        padding: 10
    }

  });