import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  useAnimatedKeyboard,
} from "react-native-reanimated";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full flex justify-around pt-40 pb-10">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />

      <View className="flex items-center h-full">
        <Text className="text-white font-bold tracking-wider text-5xl">
          PlayMate!!
        </Text>
      </View>
      <View className="flex items-center mx-4 space-y-4" >
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="w-full"
        >
          <TouchableOpacity
            className="w-full bg-sky-400 p-4 rounded 2xl mb-3"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-xl font-bold text-white text-center">
              Let's Play
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
