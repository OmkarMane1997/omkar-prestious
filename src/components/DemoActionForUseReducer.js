export const initialActions = {
  count: 0,
};

export const Counter = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
};
