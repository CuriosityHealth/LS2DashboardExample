
export interface IAuthState {
    apiToken: string | null;
    isSigningIn: boolean
}

export interface IStoreState {
    auth: IAuthState
}

export interface APIConfig {
    baseURL: string
    studyID: string
}