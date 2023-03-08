import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Homepage = ({ navigation }: any) => {
  const [country, setcountry] = useState("");
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 30 }}>Weather App</Text>
      <View
        style={{
          borderWidth: 1,
          height: 150,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 15, marginBottom: 10 }}>Add your country</Text>
        <TextInput
          testID="inputFeild"
          placeholder="Country"
          style={{
            borderWidth: 1,
            width: 200,
            padding: 6,
            marginBottom: 10,
            borderRadius: 8,
          }}
          onChangeText={setcountry}
        />
        <Button
          disabled={country === ""}
          title="Submit"
          testID="submitButton"
          onPress={() => navigation.navigate("Country", { country: country })}
        />
      </View>
    </View>
  );
};

export default Homepage;
