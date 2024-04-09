import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center mt-3">
          <Image
            source={require('../../assets/bot.jpg')}
            style={{
              height: heightPercentageToDP(15),
              width: heightPercentageToDP(15),
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
