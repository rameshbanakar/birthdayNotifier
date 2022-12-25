const initialState = {
  birthDate: [],
};
const Reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "ADD_BIRTH_DATE":
      return {
        ...state,
        birthDate: [...state.birthDate, action.payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
