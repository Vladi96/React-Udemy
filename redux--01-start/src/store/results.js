const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_RESULTS":
      return {
        ...state,
        results: state.results.concat({
          value: action.value,
          id: new Date().getMilliseconds()
        })
      };
    case "DELETE_RESULT":
      return {
        ...state,
        results: state.results.filter(el => el.id !== action.id)
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
