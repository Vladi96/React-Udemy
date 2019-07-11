const initialUser = {
  token: "",
  userId: ""
};

const reducer = (state = initialUser, action) => {
  switch (action.type) {
    case "LOG_USER":
      return {
        ...state,
        token: action.data.token,
        userId: action.data.userId
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
        userId: null
      };
    default:
      return { ...state };
  }
};

export default reducer;
