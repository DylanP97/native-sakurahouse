import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Platform, Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    slideAnim.setValue(0);

    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 5000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false, // Set this to true for better performance if available
    }).start(() => {
      startAnimation(); // Restart the animation when it's completed
    });
  };

  return (
    <SafeAreaView className={ios ? "mb-2" : "my-1"}>
      {/* <StatusBar style="light" /> */}
      <Animated.Text
        numberOfLines={1}
        style={{
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [300, -400],
              }),
            },
          ],
        }}>
        SakuraHouse Experience the essence of Japanese cuisine 🌸
      </Animated.Text>
    </SafeAreaView>
  );
}

export default Header;
