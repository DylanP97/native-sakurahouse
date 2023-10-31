import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Animated, Easing } from "react-native";
import angleCircleDown from "../assets/interface/angle-circle-down.png";

export default function Tab({ children, title, title2, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className={`bg-green-200 max-w-[45vw] ${isOpen ? "fixed" : ""}`}>
      <TouchableOpacity
        onPress={handleTabClick}
        className="aspect-[9/11] rounded-xl my-4 py-3 mx-auto flex flex-col justify-center items-center bg-pink-100">
        <View className="h-24 w-24 p-1 mb-6">
          <Image className="max-w-full max-h-full" source={icon} alt={title} />
        </View>
        <View className="py-2 text-center absolute bottom-5">
          <Text className="tracking-wider	text-center font-bold text-xl">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        className={` ${
          isOpen
            ? "opacity-100 h-auto mb-6"
            : "opacity-0 h-0 my-0"
        }`}>
        {children}
      </View>
    </View>
  );
}
