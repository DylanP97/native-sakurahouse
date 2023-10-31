import { View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import sakura from "../assets/sakuraFestival/sakura-1.png";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";

export default function PaymentScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { location, itemsSelected, totalAmount } = useSelector(
    (state) => state.myReducer.order
  );

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10, paddingTop: 24 }}>
          <View className="w-[90vw] p-2 mx-auto flex items-center justify-center mt-4">
            <View className="h-24 w-24 mt-4 mb-4">
              <Image
                className="max-w-full max-h-full"
                source={sakura}
                alt="sakura-logo"
              />
            </View>
            <View className="flex justify-start w-full">
              <Text className="text-3xl font-black text-black">My</Text>
              <Text className="text-3xl font-black text-black">Order</Text>
              <Text className="text-gray-300 mt-1">{location}</Text>
            </View>
            <View className="flex w-full flex-row items-end justify-between pb-4 border-b border-gray-100 mt-8">
              <Text className="text-xs text-gray-300 w-16">#</Text>
              <Text className="text-xs text-gray-300 w-16">Name</Text>
              <Text className="text-xs text-gray-300 w-24">Details</Text>
              <Text className="text-xs text-gray-300 w-10">Unit</Text>
            </View>
            {itemsSelected.map((item, index) => (
              <View
                key={`${item}${index}orderitem`}
                className="flex w-full flex-row items-center py-4 justify-between border-b border-gray-100">
                <View className="w-16 aspect-square">
                  <Image
                    className="h-full min-w-full rounded-xl"
                    src={item?.image}
                    alt="Card Image"
                  />
                </View>
                <View className="w-16">
                  <Text className="text-xs text-black">{item.title}</Text>
                </View>
                <View className="w-24">
                  <Text className="text-xs text-black">{item.specification}</Text>
                </View>
                <View className="w-10">
                  <Text className="text-xs text-gray-300">
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}

            <View className="flex flex-row items-end justify-between my-8 w-full">
              <View>
                <Text className="text-gray-300">Total Amount</Text>
                <Text className="text-black font-bold text-3xl">
                  ${totalAmount.toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Thanks")}
                className="flex flex-row justify-between bg-pink-100 py-2 px-4 rounded-xl">
                <Text className="text-black text-xl font-bold">Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
