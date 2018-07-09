import { connect } from 'react-redux';
import StudySummary from '../components/StudySummary';

import { IStoreState } from '../types/index';

const mapStateToProps = (state: IStoreState) => ({
    
})

// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//     clearAPIToken: () => dispatch(actions.clearAPIToken()),
//     setAPIToken: (token: string) => dispatch(actions.setAPIToken(token)),
// })  

export default connect<{}>(mapStateToProps)(StudySummary);