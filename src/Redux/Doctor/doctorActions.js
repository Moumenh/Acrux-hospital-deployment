import { DoctorActionTypes } from './doctorActionTypes';

export const setCurrentDoctor = doctor => ({
  type: DoctorActionTypes.SET_CURRENT_DOCTOR,
  payload: doctor
});

