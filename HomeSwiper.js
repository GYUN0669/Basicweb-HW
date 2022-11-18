/*
Swiper 설명 : https://github.com/leecade/react-native-swiper
*/

import React from "react";
import { View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

const SwiperImage = ({ source }) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.image} source={source} />
    </View>
  );
};

const HomeSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={220}
        showsButtons
        dot={
          <View
            style={{
              backgroundColor: "white",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "black",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          bottom: 30,
        }}
        loop
      >
        <SwiperImage source={require("../../assets/grey.png")} />
        <SwiperImage source={require("../../assets/grey.png")} />
        <SwiperImage source={require("../../assets/grey.png")} />
        <SwiperImage source={require("../../assets/grey.png")} />
      </Swiper>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  image: {
    width,
    height,
  },
};

export default HomeSwiper;
