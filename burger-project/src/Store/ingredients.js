const initialState = {
  ingredients: [],
  totalPrice: 2.99
};

const productPrice = {
  salad: 0.5,
  bacon: 1.49,
  cheese: 1.29,
  meat: 1.99
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        totalPrice: Number(
          (state.totalPrice + productPrice[action.data.ing]).toFixed(2)
        ),
        ingredients: [action.data.ing, ...state.ingredients]
      };

    case "REMOVE_INGREDIENT":
      let newIngredients = [...state.ingredients];
      const indexOftype = newIngredients.indexOf(action.data.ing);
      let totalPrice = state.totalPrice;

      if (indexOftype !== -1) {
        newIngredients.splice(indexOftype, 1);
        totalPrice = Number(
          (totalPrice - productPrice[action.data.ing]).toFixed(2)
        );
      }

      return {
        ...state,
        totalPrice: Number(totalPrice),
        ingredients: newIngredients
      };
    case "REMOVE_ALL_ING":
      return {
        ...initialState
      };
    default:
      return { ...state };
  }
};

export default reducer;
