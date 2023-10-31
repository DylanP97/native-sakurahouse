import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import sakura from "../../assets/sakuraFestival/sakura-1.png";

const UpperMenu = ({
    sideOrderOpen,
    setSideOrderOpen,
    itemsSelected
}) => {

  return (
    <View className="flex flex-row">
      <View className="w-[70%]">
        <View className="h-14 w-14 mt-4 mb-4">
          <Image
            className="max-w-full max-h-full"
            source={sakura}
            alt="sakura-logo"
          />
        </View>
        <Text className="tracking-widest font-black text-[28px] mb-2">
          What,
        </Text>
        <Text className="tracking-widest font-medium text-[24px] mb-2 text-gray-300">
          will you eat?
        </Text>
      </View>
      <TouchableOpacity
        className="w-[30%] p-2 flex items-end justify-end"
        onPress={() => setSideOrderOpen(!sideOrderOpen)}>
        <ShoppingCartIcon
          fill="#fce7f3"
          color={itemsSelected.length > 0 ? "black" : "#fce7f3"}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UpperMenu;
