
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Formulario(props) {

    const [query, setQuery] = useState("");

    const _search = () => {
        // console.log(query);
        props.filterByTitle(query);
    }

    return (
        <View style={styles.form}>
            <Text testID='catalogo' Text>Catálogo</Text>
            <TextInput testID='filtro' type="text" id="query" 
                placeholder="Escriba lo que quiere buscar"
                value={query}
                onChangeText={setQuery}
                style={styles.input}></TextInput>
            <Button testID='buscador' title='Buscar' onPress={_search} style={styles.btn} />
        </View>
    );


}

const styles = StyleSheet.create({
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