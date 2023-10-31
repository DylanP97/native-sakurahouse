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
              <View className="h-44 aspect-square w-full mb-4 self-center">
                <Image
                  className="w-full h-full rounded-xl"
                  src={itemOpen.image}
                  alt="item image"
                />
              </View>
              <Text className="text-xl text-center font-black tracking-widest w-full">
                {itemOpen && itemOpen.title}
              </Text>
              <Text className="text-xl font-bold">
                {itemOpen && "$" + itemOpen.price.toFixed(2)}
              </Text>
              <Text className="text-sm italic text-center mb-2 w-full">
                {itemOpen && itemOpen.specification}
              </Text>
              <Text className="text-sm text-center font-bold w-full">
                {currentQtyInCart} currently in cart
              </Text>
              <View className="w-full flex-row justify-center my-2">
                {currentQtyInCart > 0 && (
                  <TouchableOpacity
                    onPress={() => dispatch(removeItem(itemOpen))}
                    className="w-auto mx-1 px-6 py-4 bg-gray-100 rounded-xl">
                    <Text className="text-black text-md font-black">
                      Remove From Cart
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => dispatch(addItem(itemOpen))}
                  className="w-auto mx-1 px-6 py-4 bg-pink-100 rounded-xl">
                  <Text className="text-black text-md font-black">
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </SlidingUpPanel>
  );
};

export default ItemPanel;
