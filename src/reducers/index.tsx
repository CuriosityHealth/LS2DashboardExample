import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
// import { APITokenAction } from '../actions';
import { CLEAR_API_TOKEN, SET_API_TOKEN, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS  } from '../constants/index';
import { IAuthState, IStoreState } from '../types/index';


export function auth(state: IAuthState, action: any): IAuthState {

  console.log(state)

  const concreteState = state ? state : {
    apiToken: null,
    isSigningIn: false
  };

  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...concreteState, isSigningIn: true};
    case SIGN_IN_FAILURE:
    case SIGN_IN_SUCCESS:
      return { ...concreteState, isSigningIn: true};
    case CLEAR_API_TOKEN:
      return { ...concreteState, apiToken: null};
    case SET_API_TOKEN:
      return { ...concreteState, apiToken: action.token };
  }
  return concreteState;
}

// WHITELIST
const persistAuthConfig = {
  key: 'auth',
  storage: storageSession,
  whitelist: ['apiToken'] // only navigation will be persisted
};

const persistedAuthReducer = persistReducer(persistAuthConfig, auth)

const rootReducer = combineReducers<IStoreState>({
  auth: persistedAuthReducer
});

export default rootReducer 