import { Text, View, Dimensions } from "react-native";
import ItemCard from "./ItemCard";
import Carousel from "react-native-snap-carousel";

var { width } = Dimensions.get("window");

export default function ItemsGrid({ items, category, itemOpen, setItemOpen }) {
  const categoryItems = items.filter((item) => item.category == category.label);

  return (
    <View className="my-6">
      <Text className="tracking-widest font-black text-[24px] mb-4">
        {category.label}
      </Text>
      <Carousel
        layout="default"
        data={categoryItems}
        renderItem={({ item, index }) => (
          <ItemCard
            key={`${index}${item._id}-itemcard`}
            item={item}
            index={index}
            itemOpen={itemOpen}
            setItemOpen={setItemOpen}
          />
        )}
        firstItem={1}
        loop={false}
        inactiveSlideOpacity={0.3}
        sliderHeight={600}
        sliderWidth={width}
        itemWidth={width * 0.30}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
