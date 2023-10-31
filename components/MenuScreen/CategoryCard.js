import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CategoryCard({ category, categorySelected, setCategorySelected }) {

  return (
    <TouchableOpacity
      className={`w-[22%] rounded-xl mx-auto my-2 py-3 flex flex-col items-center justify-center`}
      onPress={() => {
        categorySelected !== category && setCategorySelected(category)
      }}
    >
      <View className="h-16 w-16 p-1 mb-4">
        <Image
          className={`${categorySelected === category ? "" : "opacity-50"} max-w-full max-h-full`}
          source={category?.icon}
          alt="Category Image"
        />
      </View>
      <View className={`${categorySelected === category ? "bg-pink-100" : ""}`}>
        <Text className={`${categorySelected === category ? "font-black border-b-2 border-pink-100" : "font-normal text-gray-300"}  text-lg w-full`}>{category.label}</Text>
      </View>
    </TouchableOpacity>
  );
}
