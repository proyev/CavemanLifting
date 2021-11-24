import React, { createContext, useEffect, useReducer, useState } from 'react';
import ApiService from './ApiService';

import { appInitState, appStateReducer } from './Utils/appStateManager';

import { Action, AppState, User, Workout } from './Utils/interface';

type Context = {
  appState: AppState;
  userData: User,
  dispatch: React.Dispatch<Action>;
  appStateDispatch: React.Dispatch<Action>;
  findWorkout: (id: string) => Workout | undefined;
}

export const CavemanContext = createContext<Partial<Context>>({});

export function reducer(state: User, action: Action): User {
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

type Props = {
  children: React.ReactChildren | React.ReactElement
}

export function CavemanContextProvider({ children }: Props) {
  let userData: User | undefined = undefined;
  let dispatch: React.Dispatch<Action> | undefined = undefined;
  const [appState, appStateDispatch] = useReducer(appStateReducer, appInitState);

  //check if loading works
  useEffect(() => {
    (async () => {
      const user = await ApiService.getUser<User>('6197bb2f2d805d2db970edee');
      [userData, dispatch] = useReducer(reducer, user);
      dispatch({ type: 'SET_USER', payload: user });
    })();

  }, []);

  useEffect(() => {
    if (userData) ApiService.updateUser(userData._id, userData);
  }, [userData]);


  return (
    <CavemanContext.Provider value={
      {
        userData,
        dispatch,
        findWorkout: (id: string): Workout | undefined => {
          if (userData)
            return userData.workouts.find((wk: any) =>
              wk._id ? wk._id === id : wk.id === id
            );
        },
        appState,
        appStateDispatch,
      }
    }>
      {children}
    </CavemanContext.Provider>
  );
}
