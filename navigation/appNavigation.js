import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WhereScreen from "../screens/WhereScreen";
import MenuScreen from "../screens/MenuScreen";
import ThanksScreen from "../screens/ThanksScreen";
import PaymentScreen from "../screens/PaymentScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  MapPinIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  HandThumbUpIcon,
} from "react-native-heroicons/solid";
import { themeColors } from '../theme';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home")
              return (
                <HomeIcon color={focused ? themeColors.black : themeColors.gray} size={24} />
                );
            else if (route.name === "Where")
              return (
                <MapPinIcon color={focused ? themeColors.black : themeColors.gray} size={24} />
              );
            else if (route.name === "Menu")
              return (
                <ShoppingCartIcon color={focused ? themeColors.black : themeColors.gray} size={24} />
              );
            else if (route.name === "Payment")
              return (
                <BanknotesIcon color={focused ? themeColors.black : themeColors.gray} size={24} />
              );
            else if (route.name === "Thanks")
              return (
                <HandThumbUpIcon color={focused ? themeColors.black : themeColors.gray} size={24} />
              );
          },
          tabBarActiveTintColor: themeColors.black,
          tabBarInactiveTintColor: themeColors.gray,
          tabBarStyle: {
            height: 100,
            paddingTop: 10,
            paddingBottom: 30,
            backgroundColor: themeColors.white,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Where" component={WhereScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
        <Tab.Screen name="Thanks" component={ThanksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
