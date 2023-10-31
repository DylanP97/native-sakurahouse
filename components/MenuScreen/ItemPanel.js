import SlidingUpPanel from "rn-sliding-up-panel";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../../reducers";
import { useEffect } from "react";
import { useState } from "react";

const { height } = Dimensions.get("window");

const ItemPanel = ({ itemOpen, setItemOpen, itemsSelected }) => {
  const draggableRange = { top: height - 220, bottom: 0 };
  const dispatch = useDispatch();
  const [currentQtyInCart, setCurrentQtyInCart] = useState(0);

  useEffect(() => {
    const qty = itemsSelected.filter(
      (item) => item.title === itemOpen.title
    ).length;
    setCurrentQtyInCart(qty);
  }, [itemsSelected, itemOpen]);

  return (
    <SlidingUpPanel
      ref={(c) => (this._panel = c)}
      draggableRange={draggableRange}
      onBottomReached={() => {
        setItemOpen(false);
      }}>
      <View className="flex-1 bg-white items-center justify-start px-4 relative rounded-xl">
        {itemOpen && (
          <View className="flex items-center justify-start w-full">
            <TouchableOpacity className="absolute top-2 bg-gray-500 h-1 w-6 rounded-xl" />
            <View className="absolute top-6 flex flex-col items-center justify-start w-full">
              <View className="flex flex-row w-full items-center gap-3">
                <View className="w-[44%] aspect-square mb-4 self-start">
                  <Image
                    className="w-full h-full rounded-xl"
                    src={itemOpen.image}
                    alt="item image"
                  />
                </View>
                <View className="w-[44%] aspect-square mb-4 flex flex-col justify-end">
                  <Text className="text-xl font-black tracking-widest w-full">
                    {itemOpen && itemOpen.title}
                  </Text>
                  <Text className="text-xs w-full">
                    {itemOpen && "$" + itemOpen.price.toFixed(2)}{" "} - {" "}
                    {itemOpen && itemOpen.specification} in a unit
                  </Text>
                  <Text className="text-sm font-bold w-full">
                    {currentQtyInCart} unit{currentQtyInCart > 1 && "s"}{" "}
                    currently in cart
                  </Text>
                </View>
              </View>
              <View className="w-full flex-row justify-center mb-4">
                {currentQtyInCart > 0 && (
                  <TouchableOpacity
                    onPress={() => dispatch(removeItem(itemOpen))}
                    className="w-auto mx-1 px-6 py-4 bg-gray-100 rounded-xl">
                    <Text className="text-black font-black">
                      Remove From Cart
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => dispatch(addItem(itemOpen))}
                  className="w-auto mx-1 px-6 py-4 bg-pink-100 rounded-xl">
                  <Text className="text-black font-black">Add To Cart</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-xs italic text-center mb-2 w-full">
                {itemOpen && itemOpen.description}
              </Text>
            </View>
          </View>
        )}
      </View>
    </SlidingUpPanel>
  );
};

export default ItemPanel;
