import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import illustration from "../assets/illustration.jpg";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white justify-center items-center px-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text className="text-center font-bold text-3xl mb-5">
            Sakura Sushi House Restaurant 🌸
          </Text>
          <Text className="text-center">
            Choose easily your food with our ordering kiosque.
          </Text>
          <TouchableOpacity
            className="bg-pink-100 mt-8 rounded-xl w-full"
            onPress={() => { navigation.navigate("Where")}}>
            <Text className="text-black text-center p-4 font-bold text-xl">
              Touch To Start
            </Text>
          </TouchableOpacity>
          <View className="mt-8 w-[100vw] aspect-[16/7]">
            <Image
              className="max-w-full max-h-full"
              source={illustration}
              alt="sakura-bg"
            />
          </View>
        </>
      )}
    </View>
  );
}
