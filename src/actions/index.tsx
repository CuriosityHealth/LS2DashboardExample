import * as constants from '../constants'

export interface SetAPIToken {
    type: constants.SET_API_TOKEN;
    token: string;
}

export interface ClearAPIToken {
    type: constants.CLEAR_API_TOKEN;
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