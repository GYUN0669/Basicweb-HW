/*
하단 탭
Screen 설명 : https://reactnavigation.org/docs/screen/#name
options 설명 : https://reactnavigation.org/docs/bottom-tab-navigator
Ionicons : https://ionic.io/ionicons
*/

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  HomeScreen,
  JoinScreen,
  ManagementScreen,
  MyInfo,
} from "../Screens";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
  const pressSearchButton = () => {
    navigation.navigate("Search");
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerTitleAlign: "center",
        headerRight: () => (
          <Ionicons name="search" size={24} onPress={pressSearchButton} />
        ),
        headerRightContainerStyle: { right: 20 },
      }}
    >
      <Tab.Screen
        // 홈 화면
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // 참여중 화면
        name="Join"
        component={JoinScreen}
        options={{
          title: "참여중",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // 관리중 화면
        name="Management"
        component={ManagementScreen}
        options={{
          title: "관리중",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // 내 정보 화면
        name="MyInfo"
        component={MyInfo}
        options={{
          title: "내정보",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
