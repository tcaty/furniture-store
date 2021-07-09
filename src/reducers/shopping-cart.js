import {
  FURNITURE_ADDED_TO_CART,
  FURNITURE_REMOVED_FROM_CART,
  FURNITURE_DELETED_FROM_CART
} from '../actions/action-names';

const updateCartItem = (state, furnitureId, furnitureIndexInCart, quantity) => {

  const { furnitureList: { furniture }, shoppingCart : { cartItems } } = state; 
  const furnitureForAdd = furniture.find(({ id }) => id === furnitureId); 

  const {
    id = furnitureForAdd.id,
    name = furnitureForAdd.name,
    category = furnitureForAdd.category,
    image = furnitureForAdd.image,
    count = 0,
    totalPrice = 0,
  } = furnitureIndexInCart === -1 ? {} : cartItems[furnitureIndexInCart];
  
  return {
    id,
    name,
    category,
    image,
    count: count + quantity,
    totalPrice: totalPrice + furnitureForAdd.price * quantity
  };

}

const updateCartItems = (state, furnitureId, quantity) => {

  const { shoppingCart: { cartItems } } = state;
  const furnitureIndexInCart = cartItems.findIndex(({ id }) => id === furnitureId);
  const newItem = updateCartItem(state, furnitureId, furnitureIndexInCart, quantity);

  if (furnitureIndexInCart === -1) {
    return [
      ...cartItems,
      newItem
    ];
  }
  
  if (newItem.count < 1) {
    return [
      ...cartItems.slice(0, furnitureIndexInCart),
      ...cartItems.slice(furnitureIndexInCart + 1)
    ];
  }
  
  return [
    ...cartItems.slice(0, furnitureIndexInCart),
    newItem,
    ...cartItems.slice(furnitureIndexInCart + 1)
  ];
};

const updateCartItemsTotalCount = (state, quantity) => {

  const { shoppingCart: { cartItems } } = state;
  let cartItemsTotalCount = 0;

  cartItems.forEach(({ count }) => { cartItemsTotalCount += count });

  return cartItemsTotalCount + quantity;
};

const updateOrderTotalPrice = (state, furnitureId, quantity) => {

  const { furnitureList: { furniture }, shoppingCart: { cartItems } } = state;
  const { price } = furniture.find(({ id }) => id === furnitureId); 
  let orderTotalPrice = 0;

  cartItems.forEach(({ totalPrice }) => { orderTotalPrice += totalPrice });

  return orderTotalPrice + price * quantity;
};

const updateShoppingCartState = (state, furnitureId, quantity) => {
  return {
    cartItems: updateCartItems(state, furnitureId, quantity),
    cartItemsTotalCount: updateCartItemsTotalCount(state, quantity),
    orderTotalPrice: updateOrderTotalPrice(state, furnitureId, quantity),
  }
}

const initialShoppingCart = {
  cartItems: [],
  cartItemsTotalCount: 0,
  orderTotalPrice: 0,
};

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return initialShoppingCart;
  }

  switch (action.type) {
    
    case FURNITURE_ADDED_TO_CART:
      return updateShoppingCartState(state, action.payload, 1);
      
    case FURNITURE_REMOVED_FROM_CART:
      return updateShoppingCartState(state, action.payload, -1);
    
    case FURNITURE_DELETED_FROM_CART:
      const { shoppingCart : { cartItems } } = state;
      const quantity = cartItems.find(({ id }) => id === action.payload).count;

      return updateShoppingCartState(state, action.payload, (-1) * quantity);

    default: return state.shoppingCart;
  }
};

export default updateShoppingCart;