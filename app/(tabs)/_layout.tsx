import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        // tabBarInactiveTintColor: Colors.secondary,
        // tabBarStyle: {
        //   height: 60,
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size}  />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "WishList",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size}  />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="airbnb" size={size}  />
          ),
        }}
      />

<Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} />
          ),
        }}
      />    

    </Tabs>
  );
};

export default Layout;
