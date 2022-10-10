const initState = {
  nextMsgId: 1,
  msgs: [
  ],
};

const msgReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_MSG": {
      return { ...state, msgs: [ ...state.msgs, payload ] };
    }

    case "DELETE_MSG": {
      return {
        ...state,
        msgs: [ ...state.msgs.filter((msg) => payload.id !== msg.id)] ,
      };
    }

    default:
      return state;
  }
};

export default msgReducer;
