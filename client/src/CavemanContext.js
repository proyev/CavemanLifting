import { createContext, useEffect, useReducer } from 'react';
import React from 'react';
import ApiService from './ApiService';

export const CavemanContext = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    case 'ADD_ROUTINE': {
      const workouts = [...state.workouts].map(w => {
        if (w._id === action.id) {
          return { ...w, routine: [...w.routine, action.payload] };
        } else return w;
      });
      return { ...state, workouts: [...workouts] };
    }
    case 'ADD_WORKOUT': {
      return { ...state, workouts: [action.payload, ...state.workouts] };
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
      return userData.workouts.find(wk => wk._id === id);
    },
  };

  //check if loading works
  useEffect(() => {
    (async () => {
      const user = await ApiService.getUser('6197bb2f2d805d2db970edee');
      console.log(user);
      dispatch({ type: 'SET_USER', payload: user });
    })();
  }, []);

  //TODO when front end is ready, set the useEffect to post the data to the db whenever userData changes

  return (
    <CavemanContext.Provider value={context}>
      {children}
    </CavemanContext.Provider>
  );
}
