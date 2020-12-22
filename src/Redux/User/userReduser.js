import { UserActionTypes } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  email: null,
  id: null,
  role: "user",
  contactArray:[],
  contactName:'',
  image: null,
  patientId: null,
  doctorId: null,
  fetchId: null,
  chatArray:{},
  lastTextObject:{}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      };
    case UserActionTypes.SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      };
    case UserActionTypes.SET_PATIENT_ID:
      return {
        ...state,
        patientId: action.payload
      };
    case UserActionTypes.SET_DOCTOR_ID:
      return {
        ...state,
        doctorId: action.payload
      };
    case UserActionTypes.SET_USER_IMAGE:
      return {
        ...state,
        image: action.payload
      }
    case UserActionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload
      }
    case UserActionTypes.SET_FETCH_ID:
      return {
        ...state,
        fetchId: action.payload
      }
      case UserActionTypes.SET_CONTACT_ARRAY:
      return {
        ...state,
        contactArray: action.payload
      }
      case UserActionTypes.SET_CONTACT_TITLE:
      return {
        ...state,
        contactName: action.payload
      }
      case UserActionTypes.SET_CHAT_ARRAY:
      return {
        ...state,
        chatArray: action.payload
      }
      case UserActionTypes.SET_TEXT_OBJECT:
      return {
        ...state,
        lastTextObject: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;