import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-emerald-50">
      <View className="space-y-2">
        <Text className="text-center font-bold text-gray-700 text-3xl">
          JARVIS
        </Text>
        <Text className="text-center font-bold text-gray-600 text-sm">
          The Future is here,powered by AI
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/bot.jpg')}
          style={{
            width: widthPercentageToDP(75),
            height: widthPercentageToDP(75),
          }}
          className="rounded-2xl"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text className="text-center font-bold text-white text-2xl">
          Get Started
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
