
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../actions/';
import Hello, { IHelloProps } from '../components/Hello';

import { IStoreState } from '../types/index';

const mapStateToProps = (state: IStoreState) => ({
    apiToken: state.auth.apiToken
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    clearAPIToken: () => dispatch(actions.clearAPIToken()),
    setAPIToken: (token: string) => dispatch(actions.setAPIToken(token)),
})

export default connect<IHelloProps>(mapStateToProps, mapDispatchToProps)(Hello);