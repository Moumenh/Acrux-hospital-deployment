import { DepartmentActionTypes } from './departmentActionTypes'

const INITIAL_STATE = {
  Departments:[]
};

const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DepartmentActionTypes.VIEW_DEPARTMENT:
      return {
        ...state,
        Departments: action.payload,
        
      };
      
    default:
      return state;
  }
};

export default departmentReducer;