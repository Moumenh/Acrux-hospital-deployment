import { UserActionTypes } from './userActionTypes';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserRole = role => ({
  type: UserActionTypes.SET_USER_ROLE,
  payload: role
});

export const setUserImage = image => ({
  type: UserActionTypes.SET_USER_IMAGE,
  payload: image
});
export const setPatientId = id => ({
  type: UserActionTypes.SET_PATIENT_ID,
  payload: id
})

export const setDoctorId = id => ({
  type: UserActionTypes.SET_DOCTOR_ID,
  payload: id
})


export const setImg = id => ({
  type: UserActionTypes.SET_IMAGE,
  payload: id
})

export const setFetchId = id => ({
  type: UserActionTypes.SET_FETCH_ID,
  payload : id
})

export const setMessageContacts=resultArray=>({
  type: UserActionTypes.SET_CONTACT_ARRAY,
  payload : resultArray
})

export const setContactTitle=name=>({
  type: UserActionTypes.SET_CONTACT_TITLE,
  payload : name
})

export const setChatArray=array=>({
  type: UserActionTypes.SET_CHAT_ARRAY,
  payload : array
})

export const setLastTextObject=obj=>({
  type: UserActionTypes.SET_TEXT_OBJECT,
  payload : obj
})
