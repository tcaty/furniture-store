import {
  FETCH_FURNITURE_REQUESTED,
  FETCH_FURNITURE_SUCCESS,
  FETCH_FURNITURE_FAILURE
} from '../actions/action-names';

const initialFurnitureList = {
  furniture: [],
  loading: true,
  error: null
};

const updateFurnitureList = (state, action) => {

  if (state === undefined) {
    return initialFurnitureList;
  }

  switch (action.type) {

    case FETCH_FURNITURE_REQUESTED:
      return initialFurnitureList;

    case FETCH_FURNITURE_SUCCESS:
      return {
        furniture: action.payload,
        loading: false,
        error: null
      };

    case FETCH_FURNITURE_FAILURE:
      return {
        furniture: [],
        loading: false,
        error: action.payload
      };

    default: return state.furnitureList;
  }
}

export default updateFurnitureList;