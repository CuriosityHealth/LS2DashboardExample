
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

// import * as actions from '../actions/';
import App, { IAppProps } from '../components/App';
import { isSignedIn } from '../selectors';

import { IStoreState } from '../types/index';

const mapStateToProps = (state: IStoreState) => ({
    isSignedIn: isSignedIn(state)
})

// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//     clearAPIToken: () => dispatch(actions.clearAPIToken()),
//     setAPIToken: (token: string) => dispatch(actions.setAPIToken(token)),
// })  

export default connect<IAppProps>(mapStateToProps)(App);