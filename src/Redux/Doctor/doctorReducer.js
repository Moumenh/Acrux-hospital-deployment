import { DoctorActionTypes} from './doctorActionTypes';

const INITIAL_STATE = {
  currentDoctor: ['ddd'],
 
};

const doctorReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DoctorActionTypes.SET_CURRENT_DOCTOR:
      return {
        ...state,
        currentDoctor: action.payload,
      }
    default:
      return state;
  }
};

export default doctorReducer;