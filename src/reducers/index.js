import updateFurnitureList from "./furniture-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    furnitureList: updateFurnitureList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;