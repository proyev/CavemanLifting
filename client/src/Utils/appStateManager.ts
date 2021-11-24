import { AppState, Action } from "./interface";

export const appInitState: AppState = {
  showEditSession: false,
  showNavbar: false,
  showNewSession: false,
  workoutId: '',
};

export function appStateReducer(state: AppState, action: Action): AppState{
  switch (action.type) {
    case 'TOGGLE_NEW_SESSION':
      return {
        ...state,
        showNewSession: !state.showNewSession,
      };
    case 'TOGGLE_EDIT_SESSION':
      return {
        ...state,
        showEditSession: !state.showEditSession,
        workoutId: action.id,
      };
    case 'TOGGLE_NAVBAR':
      return {
        ...state,
        showNavbar: !state.showNavbar,
      };
    default:
      return state;
  }
}
