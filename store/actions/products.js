export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, productId: productId };
};

export const addProduct = (title, description, imageUrl, price) => {
  return {
    type: ADD_PRODUCT,
    productData: {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    },
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    productId: id,
    productData: {
      title: title,
      description: description,
      imageUrl: imageUrl,
    },
  };
};
