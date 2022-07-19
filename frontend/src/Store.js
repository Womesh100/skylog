import { createContext, useReducer } from 'react';

// creating a context here.
export const Store = createContext();

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
