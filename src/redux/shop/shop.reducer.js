import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

//SHOP_DATA is not needed any more as this data is being fetched from firebase

// const INITIAL_STATE = {
//   collections: SHOP_DATA,
// };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
