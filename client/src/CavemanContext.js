import React, { createContext, useEffect, useReducer } from 'react';
import ApiService from './ApiService';

export const CavemanContext = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    case 'ADD_ROUTINE': {
      const workouts = [...state.workouts].map(w => {
        if (w._id ? w._id === action.id : w.id === action.id) {
          return { ...w, routine: [...w.routine, action.payload] };
        } else return w;
      });
      return { ...state, workouts: [...workouts] };
    }
    case 'ADD_WORKOUT': {
      return { ...state, workouts: [{ ...action.payload }, ...state.workouts] };
    }
    default:
      return state;
  }
}

export function CavemanContextProvider({ children }) {
  const [userData, dispatch] = useReducer(reducer, {});

  const context = {
    userData,
    dispatch,
    findWorkout: id => {
      return userData.workouts.find(wk =>
        wk._id ? wk._id === id : wk.id === id
      );
    },
  };

  //check if loading works
  useEffect(() => {
    (async () => {
      const user = await ApiService.getUser('6197bb2f2d805d2db970edee');
      dispatch({ type: 'SET_USER', payload: user });
    })();
  }, []);

  useEffect(() => {
    if (userData._id) ApiService.updateUser(userData._id, userData);
  }, [userData]);

  return (
    <CavemanContext.Provider value={context}>
      {children}
    </CavemanContext.Provider>
  );
}
