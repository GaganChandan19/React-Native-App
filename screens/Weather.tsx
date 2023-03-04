import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

const Weather = ({ navigation, route }: any) => {
  const { capital } = route.params;
  interface IData {
    temperature: number;
    weather_icons: any;
    wind_speed: number;
    precip: number;
  }

  const [{ temperature, weather_icons, wind_speed, precip }, setdata] =
    useState<IData>({
      temperature: 0,
      weather_icons: [],
      wind_speed: 0,
      precip: 0,
    });

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=68f83f417142a947f0a6b9f6f1f427d8&query=${capital}`
    )
      .then((res) => res.json())
      .then((res) => setdata(res.current))
      .catch((err) => console.log(err));
  }, [capital]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 30, color: "white" }}>
        Weather
      </Text>
      <View
        style={{
          borderWidth: 1,
          height: 250,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          padding: 35,
          borderRadius: 10,
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: `${weather_icons}` }}
        />
        <Text>Temperature: {temperature}</Text>
        <Text>Wind Speed: {wind_speed}</Text>
        <Text>Precip: {precip}</Text>
      </View>
    </View>
  );
};

export default Weather;
