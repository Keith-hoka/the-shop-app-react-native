import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import { addToCart } from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const productId = props.route.params?.productId;

  const selectedProduct = products.find((product) => product.id === productId);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route.params.productTitle,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={(Platform.OS = "android" ? "md-cart" : "ios-cart")}
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>$ {selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
  price: {
    fontSize: 35,
    color: "#888",
    textAlign: "center",
    marginVertical: 25,
    fontFamily: "open-sans-bold",
  },
});

export default ProductDetailScreen;
