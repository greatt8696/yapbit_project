
const initState = {
  onLoading: true,
  onModal: false,
  onMsg:true,
  modalDetails: {
    title: "",
    content: "",
    button: { success: "", fail: "", confirm: "" },
  },
  modalResult:{}
};

const uiReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ON_LOADING": {
      return {
        ...state,
        onLoading: true,
      };
    }

    case "OFF_LOADING": {
      return {
        ...state,
        onLoading: false,
      };
    }

    case "ON_MODAL": {
      return {
        ...state,
        onModal: true,
        modalDetails: payload,
      };
    }

    case "OFF_MODAL": {
      return {
        ...state,
        onModal: false,
        modalDetails: "",
      };
    }
    
    default:
      return state;
  }
};

export default uiReducer;
