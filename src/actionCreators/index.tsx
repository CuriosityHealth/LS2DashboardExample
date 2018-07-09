import {Action, Dispatch} from 'redux';
// import {ThunkAction} from 'redux-thunk';

// import { IStoreState } from '../types/index';

import { clearAPIToken, setAPIToken, signInFailure, signInRequest, signInSuccess,  } from '../actions'; 
import { signIn as signInAPI } from '../api';
import { apiConfig } from '../config';


// const signIn: ActionCreator<ThunkAction<Action, IStoreState, void>> = (
//     username: string,
//     password: string
// ) => {
//     return (dispatch: Dispatch<IStoreState>): Action => {
//         return dispatch({
//           type: SET_TEXT,
//           text
//         });
//       };
// }

export function signIn(username: string, password: string): (dispatch: Dispatch<Action>) => Promise<void> {
    return (dispatch: Dispatch<Action>) => {

        dispatch(signInRequest());

        return signInAPI(apiConfig.baseURL, apiConfig.studyID, username, password)
            .then( (token) => {
                dispatch(setAPIToken(token))
                dispatch(signInSuccess())
            })
            .catch( (reason) => {
                dispatch(clearAPIToken())
                dispatch(signInFailure())
            })
            
    } 
}

// // Redux action
// const reduxAction: ActionCreator<Action> = (text: string) => {
//     return {
//       type: SET_TEXT,
//       text
//     };
//   };
  
//   // Redux-Thunk action
//   const thunkAction: ActionCreator<ThunkAction<Action, IState, void>> = (
//     text: string
//   ) => {
    // return (dispatch: Dispatch<IState>): Action => {
    //   return dispatch({
    //     type: SET_TEXT,
    //     text
    //   });
    // };
//   };
  
//   // Async Redux-Thunk action
//   const asyncThinkAction: ActionCreator<
//     ThunkAction<Promise<Action>, IState, void>
//   > = () => {
//     return async (dispatch: Dispatch<IState>): Promise<Action> => {
//       try {
//         const text = await Api.call();
//         return dispatch({
//           type: SET_TEXT,
//           text
//         });
//       } catch (e) {}
//     };
//   };