import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Animated, {
    FadeIn,
    FadeInDown,
    FadeInUp,
    FadeOut,
    useAnimatedKeyboard,
  } from "react-native-reanimated";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <View className="h-full w-full flex items-center pt-40 pb-10">
      <Text className="text-black font-bold tracking-wider text-3xl">
        Welcome! Buddy
      </Text>
      <View className="flex items-center pt-80">
        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()}
          className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-4 rounded 2xl mb-3"
            onPress={() => navigation.navigate("Login")}>
                <Text className="text-xl font-bold text-white text-center">
                    SignOut
                </Text>
            </TouchableOpacity>
        </Animated.View>
      </View>
      </View>
            
    </View>
  );
}
