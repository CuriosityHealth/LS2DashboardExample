import { IStoreState } from '../types/index';

export const isSignedIn = (state: IStoreState) => !!state.auth.apiToken;