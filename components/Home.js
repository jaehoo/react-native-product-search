import { useState, useEffect } from "react";

import CONFIG from "./config/config";

import Loading from "./Loading";
import { View } from 'react-native';

import { mockdata } from "./constants/products.js";
import SearchPage from './SearchPage.js';
import ErrorBoundary from "./ErrorBoundary.js";


export default function Home(props){


    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(true);

    const toArray = (jsonObject) => {
        
        return (Object.keys(jsonObject).map(key => jsonObject[key]));
        // .slice(0,10);
    }

    const fetchData = async () => {

        // console.log(CONFIG.use_server);
        if (CONFIG.use_server) {

            let queryParams = "?limit=" + CONFIG.num_items;

            try {

                setLoading(true);

                const response = await fetch(`${CONFIG.server_url}${queryParams}`);
                // console.log(`${CONFIG.server_url}${queryParams}`);
                const data = await response.json();

                if (response.status === 200) {
                    
                    setResultado(toArray(data.products));
                    // console.log(data.products.length);
                    setLoading(false);
                } else {
                    setResultado(null);
                }
            }
            catch (e) {
                console.log(e);
                setResultado(null);
                setLoading(false);
            }

        }
        else {
            setLoading(true);
            const jsonArray = toArray(mockdata.products);
            // console.log(jsonArray.length);
            setResultado(jsonArray);
            handleLoad(false);
        }

    }



    useEffect(() => {

        fetchData();

    }, []);

    function handleLoad(value) {
        if (!value) {
            setTimeout(() => {
                setLoading(false);
            }, 50);
        } else {
            setLoading(value);
        }
    }

    return (

        <View style={{ flex: 1}}>

            {loading ? (
                    <Loading />    
            ) : (
                <ErrorBoundary>
                    <SearchPage theproducts={resultado} navigation={props.navigation}/>
                </ErrorBoundary>
            )}
        </View>
    );

}