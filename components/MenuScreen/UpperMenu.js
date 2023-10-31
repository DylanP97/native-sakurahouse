import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import sakura from "../../assets/sakuraFestival/sakura-1.png";

const UpperMenu = ({ sideOrderOpen, setSideOrderOpen, itemsSelected }) => {
  return (
    <View className="flex flex-row">
      <View className="w-[70%]">
        {/* <View className="h-14 w-14 mt-4 mb-4">
          <Image
            className="max-w-full max-h-full"
            source={sakura}
            alt="sakura-logo"
          />
        </View> */}
        <Text className="tracking-widest font-black text-[28px] mb-2">
          Choose
        </Text>
        <Text className="tracking-widest font-medium text-[20px] mb-2 text-gray-300">
          among our categories
        </Text>
      </View>
      <TouchableOpacity
        className="w-[30%] p-2 flex items-end justify-end"
        onPress={() => setSideOrderOpen(!sideOrderOpen)}>
        <View>
          <View className="absolute top-[-4] right-[-4] bg-pink-200 rounded-full w-5 aspect-square text-white text-center font-bold flex justify-center items-center z-10">
            <Text className="text-white text-xs font-bold">
              {itemsSelected.length}
            </Text>
          </View>
          <ShoppingCartIcon
            color={itemsSelected.length > 0 ? "black" : "#f3f4f6"}
            size={40}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpperMenu;
