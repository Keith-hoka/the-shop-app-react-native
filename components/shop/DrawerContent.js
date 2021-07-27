import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Main Content</Text>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Cart"
        onPress={() => {
          props.navigation.navigate("Cart");
        }}
      />
      <DrawerItem
        label="Orders"
        onPress={() => {
          props.navigation.navigate("Orders");
        }}
      />
    </View>
  );
}

function CustomDrawerContent({ navigation, props }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          fontFamily="open-sans-bold"
          icon={(drawerConfig) => (
            <Ionicons
              name={
                Platform.OS === "android" ? "md-logo-apple" : "ios-logo-apple"
              }
              size={23}
              color={drawerConfig.tintColor}
            />
          )}
          label="Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <DrawerItem
          icon={(drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={drawerConfig.tintColor}
            />
          )}
          label="Cart"
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
        <DrawerItem
          icon={(drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={drawerConfig.tintColor}
            />
          )}
          label="Orders"
          onPress={() => {
            navigation.navigate("Orders");
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
