import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { signIn } from '../actionCreators';

import SignIn, { ISignInProps } from '../components/SignIn';

import { IStoreState } from '../types/index';


const mapStateToProps = (state: IStoreState) => ({
    
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    signIn: (username: string, password: string) => dispatch(signIn(username, password))
})  

export default connect<ISignInProps>(mapStateToProps, mapDispatchToProps)(SignIn);