import {articlesActionTypes} from './articlesActionTypes'

export const viewArticles = articles => ({
    type: articlesActionTypes.VIEW_ARTICLES,
    payload: articles
  });