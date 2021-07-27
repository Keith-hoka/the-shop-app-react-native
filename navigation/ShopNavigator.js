import React from "react";
import { Platform } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },
  drawerLabelStyle: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
};

function ProductsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={defaultOptions}>
      <Stack.Screen name="Home" component={ProductsOverviewScreen} />
      <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

function UserNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Your Products" component={UserProductsScreen} />
      <Stack.Screen name="Edit Products" component={EditProductScreen} />
    </Stack.Navigator>
  );
}

function OrdersNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Your Order" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Your Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={defaultOptions}
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="All Products"
          component={ProductsNavigator}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={
                  Platform.OS === "android"
                    ? "logo-apple-appstore"
                    : "ios-logo-apple-appstore"
                }
                size={23}
                // color={drawerConfig.tintColor}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartNavigator}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                // color={drawerConfig.tintColor}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersNavigator}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                // color={drawerConfig.tintColor}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Admin"
          component={UserNavigator}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-create" : "ios-create"}
                size={23}
                // color={drawerConfig.tintColor}
                color={Colors.primary}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
