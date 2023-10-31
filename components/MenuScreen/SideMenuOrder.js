import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { removeItem } from "../../reducers";

const SideMenuOrder = ({
  sideOrderOpen,
  setSideOrderOpen,
  location,
  itemsSelected,
  totalAmount,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
      <ScrollView
        className="px-4 py-6 bg-white absolute right-0 w-[100%] min-h-[100%] h-full">
        <View className="flex flex-row justify-between items-start">
          <View className="flex flex-col">
            <Text className="text-lg font-black">My</Text>
            <Text className="text-lg font-black">Cart</Text>
            <Text className="text-gray-400 text-xs mt-2 mb-6">{location}</Text>
          </View>
          <TouchableOpacity onPress={() => setSideOrderOpen(!sideOrderOpen)}>
            <XMarkIcon color="black" size={36} />
          </TouchableOpacity>
        </View>
        {itemsSelected.map((item, index) => (
          <View
            key={`${index}-orderitem`}
            className="flex flex-col justify-center items-center py-4 border-b border-pink-100">
            <View className="w-12 aspect-square rounded-xl mb-3">
              <Image
                className="h-full min-w-full rounded-xl"
                src={item?.image}
                alt="Card Image"
              />
            </View>
            <Text className="text-center text-xs italic font-medium">
              {item.title} - {item.specification} - ${item.price.toFixed(2)}
            </Text>
          </View>
        ))}

        <View className="flex flex-col items-center justify-between mt-4 mb-10">
          <Text className="text-gray-300 text-xs">Total Amount</Text>
          <Text className="font-bold text-lg">${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Payment")}
            className="bg-pink-100 my-6 rounded-xl w-full">
            <Text className="text-black text-center p-4 font-bold text-xl">
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

export default SideMenuOrder;
