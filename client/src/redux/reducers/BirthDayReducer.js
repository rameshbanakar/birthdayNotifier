const initialState = {
  birthDateFamily: [],
  birthDateFriends: [],
  birthDateRelatives: [],
  birthDateOthers: [],
};
const Reducer = (state = initialState, action) => {
  //console.log(action.type)
  switch (action.type) {
    case "ADD_BIRTH_DATE_FAMILY":
      return {
        ...state,
        birthDateFamily: [...state.birthDateFamily, action.payload],
      };
    case "ADD_BIRTH_DATE_FRIENDS":
      return {
        ...state,
        birthDateFriends: [...state.birthDateFriends, action.payload],
      };
    case "ADD_BIRTH_DATE_RELATIVES":
      return {
        ...state,
        birthDateRelatives: [...state.birthDateRelatives, action.payload],
      };
    case "ADD_BIRTH_DATE_OTHERS":
      return {
        ...state,
        birthDateOthers: [...state.birthDateOthers, action.payload],
      };
    case "FETCH_BIRTH_DATE_OTHERS":
      return {
        ...state,
        birthDateOthers: action.payload,
      };
    case "FETCH_BIRTH_DATE_RELATIVES":
      return {
        ...state,
        birthDateRelatives: action.payload,
      };
    case "FETCH_BIRTH_DATE_FRIENDS":
      return {
        ...state,
        birthDateFriends: action.payload,
      };
    case "FETCH_BIRTH_DATE_FAMILY":
      return {
        ...state,
        birthDateFamily: action.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
