import { View, Text, TouchableOpacity, Image } from "react-native";

export default function WhereCard({
  label,
  imageSrc,
  handleWhereChoice,
}) {

  const handlePress = () => {
    handleWhereChoice(label);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-[45%] aspect-[9/11] rounded-xl my-6 py-3 mx-auto flex flex-col justify-center items-center bg-pink-100">
      <View className="h-24 w-24 p-1 mb-6">
        <Image
          className="max-w-full max-h-full"
          source={imageSrc}
          alt={label}
        />
      </View>
      <View className="py-2 text-center absolute bottom-5">
        <Text className="tracking-wider	text-center font-bold text-lg">{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
