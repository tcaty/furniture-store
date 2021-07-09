import {
  FETCH_FURNITURE_REQUESTED,
  FETCH_FURNITURE_SUCCESS,
  FETCH_FURNITURE_FAILURE,
  FURNITURE_ADDED_TO_CART,
  FURNITURE_REMOVED_FROM_CART,
  FURNITURE_DELETED_FROM_CART
} from './action-names';

const fetchFurnitureRequested = () => {
  return {
    type: FETCH_FURNITURE_REQUESTED
  };
};

const fetchFurnitureSuccess = (furniture) => {
  return {
    type: FETCH_FURNITURE_SUCCESS,
    payload: furniture
  };
};

const fetchFurnitureFailure = (error) => {
  return {
    type: FETCH_FURNITURE_FAILURE,
    payload: error
  };
};

const fetchFurniture = (dispatch, furnitureStoreService) => {
  dispatch(fetchFurnitureRequested());
  furnitureStoreService.getData()
    .then(data => dispatch(fetchFurnitureSuccess(data)))
    .catch(error => dispatch(fetchFurnitureFailure(error)));
};

const furnitureAddedToCart = (furnitureId) => {
  return {
    type: FURNITURE_ADDED_TO_CART,
    payload: furnitureId
  };
};

const furnitureRemovedFromCart = (furnitureId) => {
  return {
    type: FURNITURE_REMOVED_FROM_CART,
    payload: furnitureId
  };
};

const furnitureDeletedFromCart = (furnitureId) => {
  return {
    type: FURNITURE_DELETED_FROM_CART,
    payload: furnitureId
  }
}

export {
  fetchFurniture,
  furnitureAddedToCart,
  furnitureRemovedFromCart,
  furnitureDeletedFromCart
};