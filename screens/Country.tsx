import React, { useEffect, useState } from 'react'
import { Text, View, Image, Button } from 'react-native';
import {  DataTable } from 'react-native-paper';


const Country = ({navigation, route }:any) => {
    let country = route.params.country;
    country=country.trim();

    interface IData {
      capital: string;
      latlng: any;
      population: number;
      flags:any
  }

  const [{ capital, latlng, population, flags }, setdata] = useState<IData>({ capital: '', latlng: [], population: 0, flags: {} });
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
            .then((res) => res.json())
            .then((res) => setdata(res[0]))
            .catch((err) => console.log(err))
    }, [country]);


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
            <Text style={{ fontSize: 25, marginBottom: 30, color:'white' }}>Country Information</Text>
                     <View  style={{ borderWidth: 1, height: 250,backgroundColor:'white', alignItems: 'center', justifyContent: 'center', padding:35 , borderRadius: 10 }}>
                     <Image
                            style={{width:150,height:80}}
                            source={{uri: `${flags.png}`}}
                        />
                        <Text>Capital: {capital}</Text>
                        <Text>Population: {population}</Text>
                        <Text>Latitude: {latlng[0]}</Text>
                        <Text>Longitude: {latlng[1]}</Text>
                        <Button title="Weather" onPress={()=>navigation.navigate('Weather',{"capital":capital})}></Button>
                    </View>  
        </View>
    )
}

export default Country
