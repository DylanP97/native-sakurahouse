import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { categories, items } from "../constants";
import Loading from "../components/Loading";
import ItemPanel from "../components/MenuScreen/ItemPanel";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import CategoriesGrid from "../components/MenuScreen/CategoriesGrid";
import ItemsGrid from "../components/MenuScreen/ItemsGrid";
import SideMenuOrder from "../components/MenuScreen/SideMenuOrder";
import { useSelector } from "react-redux";
import { TouchableHighlight } from "react-native";
import UpperMenu from "../components/MenuScreen/UpperMenu";

const { height } = Dimensions.get("window");

const MenuScreen = () => {
  const [loading, setLoading] = useState(false);
  const [sideOrderOpen, setSideOrderOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState(categories[0]);
  const [thereisacategoryselected, setthereisacategoryselected] =
    useState(false);
  const { location, itemsSelected, totalAmount } = useSelector(
    (state) => state.myReducer.order
  );

  useEffect(() => {
    if (itemOpen) {
      this._panel.show((height / 100) * 55);
    } else {
      this._panel.hide();
    }
  }, [itemOpen]);

  useEffect(() => {
    if (categorySelected.length === 0) setthereisacategoryselected(false);
    else setthereisacategoryselected(true);
  }, [categorySelected]);

  return (
    <>
      <View className="flex-1 bg-white justify-center items-center px-4">
        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: 24,
              paddingTop: 24,
            }}>
            <View className="w-[90vw] mx-auto">
              <UpperMenu
                sideOrderOpen={sideOrderOpen}
                setSideOrderOpen={setSideOrderOpen}
                itemsSelected={itemsSelected}
              />
              <CategoriesGrid
                categories={categories}
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
              />
              <ItemsGrid
                items={items}
                category={categorySelected ? categorySelected : categories[0]}
                itemOpen={itemOpen}
                setItemOpen={setItemOpen}
              />
              <TouchableOpacity
                className="bg-pink-100 mt-8 rounded-xl"
                onPress={() => setSideOrderOpen(true)}>
                <Text className="text-black text-center p-4 font-bold text-xl">
                  View My Selection
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
      {sideOrderOpen && (
        <SideMenuOrder
          sideOrderOpen={sideOrderOpen}
          setSideOrderOpen={setSideOrderOpen}
          location={location}
          itemsSelected={itemsSelected}
          totalAmount={totalAmount}
        />
      )}
      <ItemPanel
        itemOpen={itemOpen}
        setItemOpen={setItemOpen}
        itemsSelected={itemsSelected}
      />
    </>
  );
};

export default MenuScreen;
