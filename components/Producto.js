import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Header from './Header';

export default function Producto(props) {
    const producto = props.route.params.item;
    // console.log(producto.images[0]);
    return (
        <View>
            <Header />
            {/* <Image style={styles.image} source={{uri: producto.images[0]}} /> */}

            <View testID='detalle'
                style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                {/* <Image style={styles.image} source={{ uri: 'https://cdn.dummyjson.com/product-images/7/1.jpg' }} /> */}
                <Image style={styles.image} src={ producto.images[0] } />
                <Text>{producto.id}</Text>
                <Text style={styles.title}>{producto.title}</Text>
                <Text style={styles.label}>Descripción:</Text>
                <Text style={styles.value}>{producto.description}</Text>
                <Text style={styles.label}>Precio:</Text>
                <Text style={styles.value}>{producto.price} $</Text>
                <Text style={styles.label}>Raiting:</Text>
                <Text style={styles.value}>{producto.rating}</Text>
                <Text style={styles.label}>Stock:</Text>
                <Text style={styles.value}>{producto.stock}</Text>
                <Button testID='volver' title='volver' onPress={() => { props.navigation.goBack(); }} />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    label: {

        fontWeight: 'bold',
        flexDirection: 'row',
        textAlign: 'left',
        margin: 3,
    },
    value: {

        flexDirection: 'row',
        margin: 3,
        textAlign: 'left',

    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        margin:5
    }

});