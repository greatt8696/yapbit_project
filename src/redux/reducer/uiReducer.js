import { coinsPrice } from "../../util/ticker";

const initState = {
  isLoading: false,
  onModal: false,
  modalDetails: {},
};

const uiReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ON_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "OFF_LOADING": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "ON_MODAL": {
      return {
        ...state,
        onModal: true,
      };
    }
    case "OFF_MODAL": {
      return {
        ...state,
        onModal: false,
      };
    }
    case "CHANGE_MODAL": {
      return {
        ...state,
        modalDetails: payload,
      };
    }

    default:
      return state;
  }
};

export default uiReducer;
