import { createContext, useEffect, useReducer } from 'react';
import React from 'react';
import ApiService from './ApiService';

export const CavemanContext = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    default:
      return state;
  }
}

export function CavemanContextProvider({ children }) {
  const [userData, dispatch] = useReducer(reducer, {});

  //check if loading works
  useEffect(() => {
    (async () => {
      const user = await ApiService.getUser('6197bb2f2d805d2db970edee');
      dispatch({ type: 'SET_USER', payload: user });
    })();
  }, []);

  return (
    <CavemanContext.Provider value={{ userData, dispatch }}>
      {console.log(userData)}
      {children}
    </CavemanContext.Provider>
  );
}
