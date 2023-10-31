import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function ItemCard({ item, setItemOpen }) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setItemOpen(item)}
        key={`${item.title}-itemcard`}
        className={`flex flex-col justify-between h-28 aspect-square relative rounded-xl`}
        style={{ overflow: "hidden" }}>
        <Image
          className="h-28 aspect-square rounded-xl"
          src={item?.image}
          alt="Card Image"
        />
      </TouchableOpacity>
      <Text className="text-black font-medium">{item.title}</Text>
      <Text className="text-gray-500 font-medium">${item.price.toFixed(2)}</Text>
      <Text className="text-gray-300">{item.specification}</Text>
    </View>
  );
}
