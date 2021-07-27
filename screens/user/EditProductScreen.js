import React, { useCallback, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CommonActions } from "@react-navigation/native";

import HeaderButton from "../../components/UI/HeaderButton";
import { addProduct, updateProduct } from "../../store/actions/products";

const EditProductScreen = (props) => {
  const productId = props.route.params?.pId;

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((product) => product.id === productId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(updateProduct(productId, title, description, imageUrl));
    } else {
      dispatch(addProduct(title, description, imageUrl, +price));
    }
  }, []);

  useLayoutEffect(() => {
    // props.navigation.setParams({ submit: submitHandler });

    props.navigation.setOptions({
      headerTitle: props.route.params.pId ? "Edit Product" : "Add Product",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              (Platform.OS = "android" ? "md-checkmark" : "ios-checkmark")
            }
            onPress={() => {
            //   props.route.params?.submit;
              props.navigation.setOptions({ submit: submitHandler });
              //   props.navigation.dispatch(
              //     CommonActions.navigate({
              //       name: "Your Products",
              //       params: { submit: submitHandler },
              //     })
              //   );
              //   props.navigation.navigate("Your Products", {
              //     submit: submitHandler,
              //   });
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [submitHandler, props.navigation]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(imageUrl) => setImageUrl(imageUrl)}
          />
        </View>
        {!editedProduct && (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(price) => setPrice(price)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(description) => setDescription(description)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
