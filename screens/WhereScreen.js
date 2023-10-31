import React, { useState } from "react";
import {
  View,
  ScrollView,
  Button,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import Loading from "../components/Loading";
import WhereStep from "../components/WhereScreen/WhereStep";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateLocation } from "../reducers";

export default function WhereScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleWhereChoice = (choice) => {
    dispatch(updateLocation(choice));
    navigation.navigate("Menu", { choice });
  };

  return (
    <View className="flex-1 bg-white px-4">
      {loading ? (
        <Loading />
      ) : (
        <WhereStep handleWhereChoice={handleWhereChoice} />
      )}
    </View>
  );
}
