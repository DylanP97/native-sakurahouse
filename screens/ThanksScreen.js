import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";
import geisha from "../assets/geisha.jpg";

export default function ThanksScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const orderNumber =
    "#0" + (Math.random() * 1000).toFixed(0).toString().padStart(4, "0");

  return (
    <View className="flex-1 bg-white justify-center items-center px-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text className="text-center font-bold text-3xl mb-5">
            Your Order Number is {orderNumber}
          </Text>
          <Text className="text-center">
            We will update you when it'll be hot & ready!
          </Text>
          <TouchableOpacity
            className="bg-pink-100 mt-8 rounded-xl"
            onLongPress={() => navigation.navigate("Home")}>
            <Text className="text-black text-center p-4 font-bold text-xl">
              Long press to go back to the beginning
            </Text>
          </TouchableOpacity>
          <View className="mt-8 w-[100vw] aspect-[16/7]">
            <Image
              className="max-w-full max-h-full"
              source={geisha}
              alt="geisha"
            />
          </View>
        </>
      )}
    </View>
  );
}
