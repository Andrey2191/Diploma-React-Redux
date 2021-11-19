const initialState = {
  saucesItems: [],
};

const sauces = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SAUCES":
      return {
        ...state,
        saucesItems: action.payload,
      };

    default:
      return state;
  }
};

export default sauces;
