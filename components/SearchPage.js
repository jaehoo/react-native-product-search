import * as React from 'react';
import { useState } from "react";
import Header from "./Header";
// import Loading from "./Loading";
import { Button, Image, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
// import Formulario from './Formulario.js';

// import { useNavigation } from '@react-navigation/native';

export default function SearchPage(props) {

    const navigation = props.navigation
    const products = props.theproducts;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [query, setQuery] = useState('');

    const renderItem = ({ item }) => (

        <View testID={'item_' + item.id} style={styles.productItem} >
            {/* <Image style={styles.image} source={{ uri: 'https://cdn.dummyjson.com/product-images/7/1.jpg' }} /> */}
            <Image style={styles.image} src={item.images[0]} />
            {/* <Text>{'button_' + item.id}</Text> */}
            <Text testID={'title_' + item.id} style={styles.title} >{item.title}</Text>
            <Text>{item.description}</Text>
            <Button style={styles.btnView} testID={'button_' + item.id} title="Ver" onPress={() => _productDetail(item)} />
        </View>
    )

    const _productDetail = (item) => {
        // console.log(item.id);
        navigation.navigate('Producto', { item: item });

    }

    const filterByTitle = (query) => {
        setFilteredProducts(products.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())));
        // console.log(filteredProducts.length);
    };

    const _search = () => {
        // console.log(query);
        filterByTitle(query);
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            {/* <Formulario filterByTitle={filterByTitle} /> */}
            <View style={styles.form} >
                <Text testID='catalogo' Text>Catálogo</Text>
                <TextInput testID='filtro'
                    placeholder="Escriba lo que quiere buscar"
                    value={query}
                    onChangeText={setQuery}
                    style={styles.input}></TextInput>
                <Button testID='buscador' title='Buscar' onPress={_search} style={styles.btn} />
            </View>
            <View style={styles.productList}>
                <FlatList
                    data={filteredProducts}
                    renderItem={renderItem}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productList: {
        backgroundColor: '#778899',
        flex: 2,
    },
    listContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    productItem: {

        // height: 50,

        backgroundColor: 'white',
        // flex: 1,
        justifyContent: 'center',
        // textAlign: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        flex: 1,
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    btnView: {
        marginVertical: 20,
        marginHorizontal: 20,


    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    form: {
        margin: 20,



    },
    input: {
        margin: 20
    },
    btn: {
        margin: 20
    },

});