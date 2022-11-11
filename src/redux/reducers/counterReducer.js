import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (state = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (state = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (state = state + action.payload);
    case actionTypes.CARPMA:
      return (state = state * action.payload);
      case (actionTypes.IKIYEBOL):
        return(state=state/action.payload)
        case (actionTypes.MODAL):
        return(state=state%action.payload)
        case (actionTypes.ASD):
          return(state=state+action.payload)
    default:
      return state;
  }
};

export default counterReducer;
