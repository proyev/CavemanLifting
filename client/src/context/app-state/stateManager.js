export function appStateReducer(state, action) {
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
