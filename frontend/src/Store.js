import { createContext, useReducer } from 'react';

// creating a context here.
export const Store = createContext();

//define reducer and initial state for StoreProvider
//initial state
const initialState = {
  cart: {
    cartItems: [],
  },
};

//Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      /**
       * Get newItem from backend
       * check existItem from newItem cart
       * if already an item in cart then use map function to update the current item with the new item 
          with action.payload, otherwise keep their reviews item in the cart
       */
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]; // if existItem is null so add new item in the list
      //return and keep all previous values and only update product this time not only cart value
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'CART_REMOVE_ITEM': {
      /**
       * use filter on cart item arrays
       * if item id is not equal to current id return it
       * otherwise remove it.
       */
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}
/**
 * StoreProvider -> a component
 * A Wrapper to our react app,
 * and pass global props to the children
 */
export function StoreProvider(props) {
  // define use reducer
  const [state, dispatch] = useReducer(reducer, initialState); //initialState ->default state
  const value = { state, dispatch }; // defined value as an object
  /**
   * Store is comming from createContext()
   * get provider from store object
   * set value of a current state
   * and dispatch to update state in the context
   * render props.children
   * */
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

//Now go to index.js and wrap the application in store provider
