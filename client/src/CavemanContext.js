import { createContext, useEffect, useReducer } from 'react';
import React from 'react';
import ApiService from './ApiService';

import { appInitState } from './context/app-state/app-init-states';
import { appStateReducer } from './context/app-state/stateManager';

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
    default:
      return state;
  }
}

export function CavemanContextProvider({ children }) {
  const [userData, dispatch] = useReducer(reducer, {});
  const [appState, appStateDispatch] = useReducer(appStateReducer, appInitState);

  const context = {
    userData,
    dispatch,
    findWorkout: id => {
      return userData.workouts.find(wk => wk._id === id);
    },
    appState,
    appStateDispatch
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
