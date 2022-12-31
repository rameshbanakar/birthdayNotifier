const initialState = {
  birthDateFamily: [],
  birthDateFriends: [],
  birthDateRelatives: [],
  birthDateOthers: [],
};
const Reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
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
    case "DELETE":
      return{
        ...state,
        birthDateFamily: state.birthDateFamily.filter(
          (a) => a._id !== action.payload
        ),
        birthDateFriends: state.birthDateFriends.filter(
          (a) => a._id !== action.payload
        ),
        birthDateRelatives: state.birthDateRelatives.filter(
          (a) => a._id !== action.payload
        ),
        birthDateOthers: state.birthDateOthers.filter(
          (a) => a._id !== action.payload
        ),
      };

    
    default: {
      return {
        ...state,
        
    }
  }
 }
};
export default Reducer;
