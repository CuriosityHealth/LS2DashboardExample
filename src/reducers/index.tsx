// import { APITokenAction } from '../actions';
import { CLEAR_API_TOKEN, SET_API_TOKEN } from '../constants/index';
import { IStoreState } from '../types/index';

export function apiToken(state: IStoreState, action: any): IStoreState {
  switch (action.type) {
    case CLEAR_API_TOKEN:
      return { ...state, apiToken: null};
    case SET_API_TOKEN:
      return { ...state, apiToken: action.token };
  }
  return state;
}