import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from './User/userReduser';
import departmentReducer from './Department/departmentReducer'
import doctorReducer from './Doctor/doctorReducer';
import articlesReducer from '../Redux/Articles/articlesReducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
  department:departmentReducer,
  articles: articlesReducer
  
});

export default persistReducer(persistConfig, rootReducer)