import { act } from "react-dom/test-utils";
import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

//SHOP_DATA is not needed any more as this data is being fetched from firestore

// const INITIAL_STATE = {
//   collections: SHOP_DATA,
// };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    //below action not needed as using thunk now

    // case ShopActionTypes.UPDATE_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };

    default:
      return state;
  }
};

export default shopReducer;
