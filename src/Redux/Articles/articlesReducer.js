import { articlesActionTypes } from './articlesActionTypes'

const INITIAL_STATE = {
  articles:[]
};

const articlestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case articlesActionTypes.VIEW_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        
      };
      
    default:
      return state;
  }
};

export default articlestReducer;