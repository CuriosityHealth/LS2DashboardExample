import * as constants from '../constants';

export interface SetAPIToken {
    type: constants.SET_API_TOKEN;
    token: string;
}

export interface ClearAPIToken {
    type: constants.CLEAR_API_TOKEN;
}

export interface SignInRequest {
    type: constants.SIGN_IN_REQUEST;
}

export interface SignInSuccess {
    type: constants.SIGN_IN_SUCCESS;
}

export interface SignInFailure {
    type: constants.SIGN_IN_FAILURE;
}

// export type APITokenAction = SetAPIToken | ClearAPIToken;

export function setAPIToken(token: string): SetAPIToken {
    return {
        token,
        type: constants.SET_API_TOKEN
    }
}

export function clearAPIToken(): ClearAPIToken {
    return {
        type: constants.CLEAR_API_TOKEN
    }
}

export function signInRequest(): SignInRequest {
    return {
        type: constants.SIGN_IN_REQUEST,
    }
}

export function signInSuccess(): SignInSuccess {
    return {
        type: constants.SIGN_IN_SUCCESS,
    }
}

export function signInFailure(): SignInFailure {
    return {
        type: constants.SIGN_IN_FAILURE,
    }
}

// export const Start = 'start'
// export const Finish = 'finish'
// export const Success = 'success'
// export const Failure = 'failure'
// export const Always = 'always'

// export type AsyncStatus =
//     typeof Start |
//     typeof Finish |
//     typeof Success |
//     typeof Failure |
//     typeof Always

// type AsyncStatusHandler<T> = {
//     [K in AsyncStatus]?: (state: T) => T
// }
// type AsyncAction = Pick<ISignInAction, "type"> & {
//     status: AsyncStatus
// }

// interface IStartSignInAction {
//     type: 'start_sign_in'
//     status: AsyncStatus
//     title: string
//     id: string
// }

// interface ICompleteSignInAction {
//     type: 'complete_sign_in'
//     status: AsyncStatus
//     id: string
// }

// type ISignInAction = IStartSignInAction | ICompleteSignInAction