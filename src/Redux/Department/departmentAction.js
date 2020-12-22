import {DepartmentActionTypes} from './departmentActionTypes'

export const viewDepartments = departments => ({
    type: DepartmentActionTypes.VIEW_DEPARTMENT,
    payload: departments
  });