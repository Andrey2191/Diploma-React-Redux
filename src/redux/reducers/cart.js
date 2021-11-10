const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      const newItems = {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: Object.keys(state.items).length,
      };

    default:
      return state;
  }
};

export default cart;
