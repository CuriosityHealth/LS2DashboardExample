import * as React from 'react';

export interface ISignInProps {
    signIn?: (username: string, password: string) => void;
}

interface ISignInState {
    username: string | null,
    password: string | null,
}

class SignIn extends React.Component<ISignInProps, ISignInState> {

    constructor(props: ISignInProps) {
        super(props);

        this.state = {
            password: null,
            username: null
         }

         this.updateUsername = this.updateUsername.bind(this);
         this.updatePassword = this.updatePassword.bind(this);
         this.signIn = this.signIn.bind(this);

    }
    public render() {
        return (
            <div>
                <h3>Sign In</h3>
                <div className="pt-control-group pt-vertical" style={{width: 300}}>
                    <div className="pt-input-group pt-large">
                        <span className="pt-icon pt-icon-person" />
                        <input type="text" className="pt-input" placeholder="Username" onChange={this.updateUsername} />
                    </div>
                    <div className="pt-input-group pt-large">
                        <span className="pt-icon pt-icon-lock" />
                        <input type="password" className="pt-input" placeholder="Password" onChange={this.updatePassword}/>
                    </div>
                    <button className="pt-button pt-large pt-intent-primary" onClick={this.signIn}>Login</button>
                </div>
            </div>
        );
    }
    
    private updateUsername(event: any) {
        console.log(event.target.value);
        this.setState({username: event.target.value})
    }

    private updatePassword(event: any) {
        console.log(event.target.value);
        this.setState({password: event.target.value})
    }

    private signIn() {
        if (this.props.signIn && this.state.username && this.state.password) {
            this.props.signIn(this.state.username, this.state.password);
        }
    }

}

// const SignIn = ({signIn}: ISignInProps) => {
//     return (
//         <div>
//             <h3>Sign In</h3>
//             <div className="pt-control-group pt-vertical" style={{width: 300}}>
//                 <div className="pt-input-group pt-large">
//                     <span className="pt-icon pt-icon-person" />
//                     <input type="text" className="pt-input" placeholder="Username" />
//                 </div>
//                 <div className="pt-input-group pt-large">
//                     <span className="pt-icon pt-icon-lock" />
//                     <input type="password" className="pt-input" placeholder="Password" />
//                 </div>
//                 <button className="pt-button pt-large pt-intent-primary">Login</button>
//             </div>
//         </div>
//     );
// }

export default SignIn;